"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Send } from "lucide-react"

const gradeOptions = [
  { value: "grade-1", label: "Grade 1 (Primary 1)" },
  { value: "grade-2", label: "Grade 2 (Primary 2)" },
  { value: "grade-3", label: "Grade 3 (Primary 3)" },
  { value: "grade-4", label: "Grade 4 (Primary 4)" },
  { value: "grade-5", label: "Grade 5 (Primary 5)" },
  { value: "grade-6", label: "Grade 6 (Primary 6)" },
  { value: "grade-7", label: "Grade 7 (JSS 1)" },
  { value: "grade-8", label: "Grade 8 (JSS 2)" },
  { value: "grade-9", label: "Grade 9 (JSS 3)" },
  { value: "grade-10", label: "Grade 10 (SS 1)" },
  { value: "grade-11", label: "Grade 11 (SS 2)" },
  { value: "grade-12", label: "Grade 12 (SS 3)" },
]

const subjectOptions = [
  { id: "math", label: "Mathematics" },
  { id: "homework", label: "Homework Support" },
]

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasWhatsApp, setHasWhatsApp] = useState(false)
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    grade: "",
    preferredTime: "",
    numChildren: "",
    phone: "",
    email: "",
    notes: "",
  })

  const handleSubjectChange = (subjectId: string, checked: boolean) => {
    if (checked) {
      setSelectedSubjects([...selectedSubjects, subjectId])
    } else {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subjectId))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject.")
      return
    }

    // If has WhatsApp, redirect to WhatsApp
    if (hasWhatsApp) {
      const message = encodeURIComponent(
        `Hello LitGems Academy!\n\nI would like to book a tutoring session.\n\n` +
        `Parent/Guardian: ${formData.parentName}\n` +
        `Child's Name: ${formData.childName}\n` +
        `Grade: ${gradeOptions.find(g => g.value === formData.grade)?.label || formData.grade}\n` +
        `Subject(s): ${selectedSubjects.map(s => subjectOptions.find(opt => opt.id === s)?.label).join(", ")}\n` +
        `Preferred Time: ${formData.preferredTime}\n` +
        `Number of Children: ${formData.numChildren || "1"}\n` +
        `Email: ${formData.email}\n` +
        `${formData.notes ? `Notes: ${formData.notes}` : ""}`
      )
      window.open(`https://wa.me/+2347082261064?text=${message}`, "_blank")
    }

    setIsSubmitted(true)
  }

  if (isSubmitted && !hasWhatsApp) {
    return (
      <section id="booking" className="py-16 md:py-24 bg-lavender/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <div className="w-20 h-20 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-purple" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-purple mb-4">
                Thank You for Booking!
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                We will contact you via the email address or phone number you provided 
                to confirm your child&apos;s session and payment details.
              </p>
              <p className="mt-4 text-sm text-charcoal/60">
                Expect to hear from us within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (isSubmitted && hasWhatsApp) {
    return (
      <section id="booking" className="py-16 md:py-24 bg-lavender/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <div className="w-20 h-20 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-purple" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-purple mb-4">
                You&apos;re Being Redirected to WhatsApp!
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                A WhatsApp chat with LitGems Academy should have opened in a new tab. 
                If it didn&apos;t open, please click the button below.
              </p>
              <Button
                asChild
                className="mt-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
              >
                <a
                  href={`https://wa.me/+2347082261064`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-lavender/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-purple mb-4">
              Book a Tutoring Session
            </h2>
            <p className="text-charcoal/70">
              Fill out the form below and we&apos;ll get back to you to confirm your child&apos;s session.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <div className="space-y-6">
              {/* Parent Name */}
              <div className="space-y-2">
                <Label htmlFor="parentName" className="text-charcoal font-medium">
                  Parent / Guardian Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="parentName"
                  required
                  placeholder="Enter your full name"
                  className="border-border focus:border-purple"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                />
              </div>

              {/* Child Name */}
              <div className="space-y-2">
                <Label htmlFor="childName" className="text-charcoal font-medium">
                  Child&apos;s Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="childName"
                  required
                  placeholder="Enter your child's name"
                  className="border-border focus:border-purple"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                />
              </div>

              {/* Grade Level */}
              <div className="space-y-2">
                <Label htmlFor="grade" className="text-charcoal font-medium">
                  Child&apos;s Grade / Level <span className="text-destructive">*</span>
                </Label>
                <Select
                  required
                  value={formData.grade}
                  onValueChange={(value) => setFormData({ ...formData, grade: value })}
                >
                  <SelectTrigger className="border-border focus:border-purple">
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subjects */}
              <div className="space-y-3">
                <Label className="text-charcoal font-medium">
                  Subject(s) to Book <span className="text-destructive">*</span>
                </Label>
                <div className="flex flex-wrap gap-4">
                  {subjectOptions.map((subject) => (
                    <div key={subject.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject.id}
                        checked={selectedSubjects.includes(subject.id)}
                        onCheckedChange={(checked) =>
                          handleSubjectChange(subject.id, checked as boolean)
                        }
                        className="border-border data-[state=checked]:bg-purple data-[state=checked]:border-purple"
                      />
                      <Label htmlFor={subject.id} className="text-charcoal cursor-pointer">
                        {subject.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <Label htmlFor="preferredTime" className="text-charcoal font-medium">
                  Preferred Days & Time <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="preferredTime"
                  required
                  placeholder="e.g., Mondays & Wednesdays, 4:00 PM WAT"
                  className="border-border focus:border-purple"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                />
                <p className="text-xs text-charcoal/60">
                  Please indicate preferred days and times; we will do our best to accommodate.
                </p>
              </div>

              {/* Number of Children */}
              <div className="space-y-2">
                <Label htmlFor="numChildren" className="text-charcoal font-medium">
                  Number of Children <span className="text-charcoal/50">(optional)</span>
                </Label>
                <Input
                  id="numChildren"
                  type="number"
                  min="1"
                  placeholder="1"
                  className="border-border focus:border-purple"
                  value={formData.numChildren}
                  onChange={(e) => setFormData({ ...formData, numChildren: e.target.value })}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-charcoal font-medium">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+234 xxx xxx xxxx"
                  className="border-border focus:border-purple"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <p className="text-xs text-charcoal/60">
                  Please provide a number we can reach you on via WhatsApp or call/SMS.
                </p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-charcoal font-medium">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="border-border focus:border-purple"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* WhatsApp Checkbox */}
              <div className="flex items-center space-x-3 bg-lavender/50 p-4 rounded-lg">
                <Checkbox
                  id="hasWhatsApp"
                  checked={hasWhatsApp}
                  onCheckedChange={(checked) => setHasWhatsApp(checked as boolean)}
                  className="border-purple data-[state=checked]:bg-purple data-[state=checked]:border-purple"
                />
                <Label htmlFor="hasWhatsApp" className="text-charcoal cursor-pointer">
                  I have WhatsApp (redirect me to chat directly)
                </Label>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-charcoal font-medium">
                  Notes / Special Requests <span className="text-charcoal/50">(optional)</span>
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific learning goals, challenges, or questions?"
                  className="border-border focus:border-purple min-h-[100px]"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-purple hover:bg-purple-dark text-white font-semibold py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Book a Session
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
