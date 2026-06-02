"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, School } from "lucide-react";

export default function SchoolForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    city: "",
    contactPerson: "",
    email: "",
    studentsCount: "30",
    gradeLevel: "Grades 4-8 (Primary School)",
    interests: {
      workshop: true,
      trip: false,
      contest: false,
      guides: true
    }
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.city || !formData.contactPerson || !formData.email) return;
    setSubmitted(true);
  };

  const handleCheckboxChange = (key: keyof typeof formData.interests) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [key]: !prev.interests[key]
      }
    }));
  };

  return (
    <div className="py-16 border-t-4 border-black bg-[#12100E]" id="szkoly">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 border-4 border-black bg-comic-red px-3 py-1 shadow-[2px_2px_0px_0px_#000000]">
              <School className="h-4.5 w-4.5 text-white stroke-[2.5]" />
              <span className="font-display font-extrabold uppercase text-xs text-white tracking-wider">SCHOOL PROGRAM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Register Your School for the Pilot Program
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              Integrate modern interactive teaching tools directly with your school&apos;s curriculum. The pilot program offers free access to learning sheets, physics and geography lesson plans, and AI-powered comic generators.
            </p>

            <div className="space-y-3 border-l-4 border-comic-red pl-4 py-1 text-xs text-zinc-400 font-bold">
              <div>• Ready-to-use lesson plans aligned with national curriculum guidelines</div>
              <div>• Teacher dashboard to manage activities and generate custom quizzes</div>
              <div>• Free online AI &amp; sketching workshops for qualified classrooms</div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="border-4 border-black bg-comic-paper text-black p-8 relative shadow-[8px_8px_0px_0px_#000000] rounded-none">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center border-4 border-black bg-comic-yellow shadow-[3px_3px_0px_0px_#000000]">
                    <CheckCircle2 className="h-6 w-6 text-black stroke-[3]" />
                  </div>
                  <h4 className="font-display text-2xl font-black uppercase text-black tracking-wider">
                    Submission Received!
                  </h4>
                  <p className="text-xs text-zinc-700 max-w-sm mx-auto leading-relaxed font-bold">
                    Thank you. A project coordinator will contact you to schedule pilot lesson rollouts in your school.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                        School / Institution Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        placeholder="e.g. Primary School No. 1"
                        className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                        City / Town *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Warsaw"
                        className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Ann Smith (Teacher)"
                        className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                        Contact Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ann.smith@school.edu"
                        className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                        Estimated Number of Students
                      </label>
                      <input
                        type="number"
                        value={formData.studentsCount}
                        onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                        placeholder="e.g. 30"
                        className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                        Grade Level
                      </label>
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                        className="w-full border-4 border-black bg-white px-4 py-2 text-xs text-black font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none appearance-none cursor-pointer"
                      >
                        <option value="Klasy I-III">Grades 1-3 (Early Education)</option>
                        <option value="Klasy IV-VIII">Grades 4-8 (Primary School)</option>
                        <option value="Szkola Srednia">High School</option>
                      </select>
                    </div>
                  </div>

                  {/* Areas of Interest checkboxes */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-2">
                      Educational Interests:
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold text-zinc-800">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.workshop}
                          onChange={() => handleCheckboxChange("workshop")}
                          className="border-2 border-black bg-white text-comic-red focus:ring-0 rounded-none h-4 w-4"
                        />
                        <span>Online Workshops</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.trip}
                          onChange={() => handleCheckboxChange("trip")}
                          className="border-2 border-black bg-white text-comic-red focus:ring-0 rounded-none h-4 w-4"
                        />
                        <span>Digital Field Trips</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.contest}
                          onChange={() => handleCheckboxChange("contest")}
                          className="border-2 border-black bg-white text-comic-red focus:ring-0 rounded-none h-4 w-4"
                        />
                        <span>Comic Book Contests</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.guides}
                          onChange={() => handleCheckboxChange("guides")}
                          className="border-2 border-black bg-white text-comic-red focus:ring-0 rounded-none h-4 w-4"
                        />
                        <span>Lesson Worksheets</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="comic-button-red py-3.5 w-full flex items-center justify-center space-x-2"
                    >
                      <span>Submit School Registration</span>
                      <ArrowRight className="h-4 w-4 stroke-[3]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
