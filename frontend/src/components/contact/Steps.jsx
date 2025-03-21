"use client"

import  React from "react"

import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../WhyCards"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Briefcase, GraduationCap, Heart, Mail, Send, Upload } from "lucide-react"

export default function CareersPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with file:", file);
    // Add file upload logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
     

      {/* Hero Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Join Our Team at <span className="text-red-800">Mount Litera</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover rewarding career opportunities for dedicated education professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Briefcase className="h-5 w-5" />
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-800">Our Commitment to Education</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mount Litera is committed to enhance the educational opportunities for dedicated professionals like you
                who have a requisite degree in Early Childhood Care & Education and are keen to be a part of unique
                Mount Litera culture.
              </p>
              <p>Mount Litera professionals enjoy careers that are both challenging and rewarding.</p>
              <p>
                Everything Mount Litera does is intentional, deeply rooted in the foundation of its Mission, Values,
                Purpose, and Service culture.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our commitment to lifetime learning extends to our employees through supporting staff in their
                    individual and professional development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offer education assistance programs, professional development programs, and ongoing career
                    development opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-red-800">How to Apply</h3>

            <Tabs defaultValue="email">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email Application</TabsTrigger>
                <TabsTrigger value="online">Online Application</TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <p className="text-muted-foreground">
                  Send us your CV / Biodata to the email address below. If your skills match our requirements, get ready
                  for a rewarding career that can transform your life.
                </p>
                <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:Mlzs.bilaspur@mountlitera.com" className="text-primary font-medium">
                    Mlzs.bilaspur@mountlitera.com
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="online">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" required />
                    </div>

                    <div className="space-y-2 ">
                      <Label htmlFor="position">Position</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent className="z-50">
                          <SelectItem value="teacher">Early Childhood Teacher</SelectItem>
                          <SelectItem value="coordinator">Education Coordinator</SelectItem>
                          <SelectItem value="counselor">School Counselor</SelectItem>
                          <SelectItem value="administrator">Administrator</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience & Qualifications</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about your education, experience, and qualifications..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload Resume/CV</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                      <input
                        type="file"
                        id="resume"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-2">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {file ? file.name : "Click to upload or drag and drop"}
                        </span>
                        <span className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</span>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Submit Application
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">Why Join Mount Litera?</h2>
            <p className="text-muted-foreground">
              If you share our vision of child centric education, we would like to invite you to work with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
                <CardDescription>Continuous learning opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular faculty training programs and numerous ongoing career development opportunities to help you
                  grow professionally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Supportive Environment</CardTitle>
                <CardDescription>Collaborative work culture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a team of dedicated educators who are passionate about making a difference in children's lives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rewarding Career</CardTitle>
                <CardDescription>Make a meaningful impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Be part of an institution that values innovation, excellence, and the holistic development of every
                  child.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">Ready to Transform Lives?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join Mount Litera and be part of our mission to provide child-centric education that shapes the future.
          </p>
          <Button size="lg" className="gap-2">
            <Briefcase className="h-5 w-5" />
            Apply Today
          </Button>
        </div>
      </section>

   
    </div>
  )
}

