
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Trash2, PlusCircle, Edit, Home, XCircle } from "lucide-react";
import { skillsData as initialSkills, projectsData as initialProjects, Skill, Project } from "@/lib/portfolio-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

export default function AdminPage() {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Skill form state
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillIcon, setNewSkillIcon] = useState("");
  const [newSkillColor, setNewSkillColor] = useState("");

  // Project form state (used for both add and edit)
  const [projectTitle, setProjectTitle] = useState("");
  const [projectTags, setProjectTags] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectClassName, setProjectClassName] = useState("");
  const [projectAiHint, setProjectAiHint] = useState("");
  const projectImageInputRef = useRef<HTMLInputElement>(null);

  const handleAddSkill = () => {
    if (newSkillName && newSkillIcon) {
      setSkills([...skills, { name: newSkillName, icon: newSkillIcon, color: newSkillColor || undefined }]);
      setNewSkillName("");
      setNewSkillIcon("");
      setNewSkillColor("");
    }
  };

  const handleRemoveSkill = (skillNameToRemove: string) => {
    setSkills(skills.filter((skill) => skill.name !== skillNameToRemove));
  };

  const resetProjectForm = () => {
    setEditingProject(null);
    setProjectTitle("");
    setProjectTags("");
    setProjectDesc("");
    setProjectImage("");
    setProjectClassName("");
    setProjectAiHint("");
    if (projectImageInputRef.current) {
      projectImageInputRef.current.value = "";
    }
  };

  const handleProjectImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProject = () => {
    if (!projectTitle || !projectImage || !projectTags) return;

    const projectData: Project = {
      title: projectTitle,
      tags: projectTags.split(',').map(tag => tag.trim()),
      description: projectDesc,
      image: projectImage,
      className: projectClassName,
      aiHint: projectAiHint,
    };

    if (editingProject) {
      // We use the original title from `editingProject` to find the item to update
      setProjects(projects.map((p) => (p.title === editingProject.title ? projectData : p)));
    } else {
      setProjects([...projects, projectData]);
    }
    resetProjectForm();
  };

  const handleStartEdit = (project: Project) => {
    setEditingProject(project);
    setProjectTitle(project.title);
    setProjectTags(project.tags.join(', '));
    setProjectDesc(project.description || '');
    setProjectImage(project.image);
    setProjectClassName(project.className);
    setProjectAiHint(project.aiHint);
  };

  const handleRemoveProject = (projectTitleToRemove: string) => {
    setProjects(projects.filter((project) => project.title !== projectTitleToRemove));
    if (editingProject && editingProject.title === projectTitleToRemove) {
      resetProjectForm();
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold font-headline text-foreground">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your portfolio content here. Changes are temporary for this session.
            </p>
          </div>
          <Link href="/">
            <Button variant="outline">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </header>

        <Tabs defaultValue="projects">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
                <CardDescription>Add, edit, or remove projects.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add/Edit Project Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 border rounded-lg">
                  <h3 className="md:col-span-2 text-lg font-medium">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
                  <Input placeholder="Project Title" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
                  <div>
                    <Label htmlFor="project-image">Project Image</Label>
                    <Input 
                      id="project-image"
                      type="file"
                      ref={projectImageInputRef}
                      onChange={handleProjectImageUpload}
                      accept="image/*"
                    />
                  </div>
                  <Textarea placeholder="Description" value={projectDesc} onChange={e => setProjectDesc(e.target.value)} className="md:col-span-2" />
                  <Input placeholder="Tags (comma, separated)" value={projectTags} onChange={e => setProjectTags(e.target.value)} />
                  <Input placeholder="Grid ClassName (optional)" value={projectClassName} onChange={e => setProjectClassName(e.target.value)} />
                   <Input placeholder="AI Hint for Image (optional)" value={projectAiHint} onChange={e => setProjectAiHint(e.target.value)} />
                  <div className="md:col-span-2 flex items-center gap-2">
                    <Button onClick={handleSaveProject}>
                       {editingProject ? <Edit className="mr-2 h-4 w-4" /> : <PlusCircle className="mr-2 h-4 w-4" />}
                       {editingProject ? 'Save Changes' : 'Add Project'}
                    </Button>
                    {editingProject && (
                      <Button variant="ghost" onClick={resetProjectForm}>
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Tags</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.title}>
                        <TableCell>
                          <Image src={project.image} alt={project.title} width={80} height={60} className="rounded-md object-cover" />
                        </TableCell>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleStartEdit(project)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleRemoveProject(project.title)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Manage Skills</CardTitle>
                <CardDescription>Add or remove skills.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Input 
                    placeholder="Skill Name (e.g. JavaScript)" 
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    className="flex-grow"
                  />
                  <Input 
                    placeholder="Lucide Icon Name (e.g. Code)"
                    value={newSkillIcon}
                    onChange={(e) => setNewSkillIcon(e.target.value)}
                    className="flex-grow"
                  />
                  <Input 
                    placeholder="Color (e.g. #87CEEB)"
                    value={newSkillColor}
                    onChange={(e) => setNewSkillColor(e.target.value)}
                    className="flex-grow"
                  />
                  <Button onClick={handleAddSkill}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Skill
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Skill Name</TableHead>
                      <TableHead>Icon Name</TableHead>
                      <TableHead>Color</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {skills.map((skill) => (
                      <TableRow key={skill.name}>
                        <TableCell className="font-medium">{skill.name}</TableCell>
                        <TableCell>{skill.icon}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {skill.color && <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: skill.color }} />}
                            <span>{skill.color || 'Default'}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleRemoveSkill(skill.name)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
