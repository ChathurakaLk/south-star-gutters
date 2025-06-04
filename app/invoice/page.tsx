"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LabelInputContainer from "@/components/ui/LabelInputContainer"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-label"

const invoice = () => {
  return (
    <div className="h-[100vh] w-full bg-neutral-950 relative flex justify-center antialiased">
      <div className="max-w-7xl w-full mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Add Project
        </h1>

        <form className="border p-4 w-full rounded-lg my-5 md:my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className="text-white col-span-1 md:col-span-2 text-lg md:text-xl font-semibold mb-2 md:mb-4 mt-2 md:mt-0 text-center md:text-left">
              Customer Details
            </h2>

            <LabelInputContainer>
              <Label className="text-white z-20" htmlFor="fullName">Full Name</Label>
              <Input type="text" className="z-20 text-white" id="fullName" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-white z-20" htmlFor="phone">Phone Number</Label>
              <Input type="number" className="z-20 text-white" id="phone" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-white" htmlFor="whatsapp">Whatsapp Number</Label>
              <Input type="number" className="z-20 text-white" id="whatsapp" />
            </LabelInputContainer>

            <LabelInputContainer className="col-span-1 md:col-span-2">
              <Label className="text-white" htmlFor="address">Address</Label>
              <Textarea className="z-20 text-white relative" id="address" />
            </LabelInputContainer>

            <h2 className="text-white col-span-1 md:col-span-2 text-lg md:text-xl font-semibold mb-2 md:mb-4 mt-2 md:mt-0 text-center md:text-left">
              Project Details
            </h2>

            <LabelInputContainer>
              <Label className="text-white" htmlFor="stories">Number of Stories</Label>
              <Input type="text" className="z-20 text-white" id="stories" placeholder="e.g., Single-story, Two-story" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-white" htmlFor="roofType">Roof Type</Label>
              <Input type="text" className="z-20 text-white" id="roofType" placeholder="e.g., Shingle, Metal, Tile" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-white" htmlFor="gutterLength">Feet of Gutter</Label>
              <Input type="number" className="z-20 text-white" id="gutterLength" placeholder="e.g., 120" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-white" htmlFor="downspouts">Downspouts Needed (Qty & Location)</Label>
              <Textarea className="z-20 text-white relative" id="downspouts" placeholder="e.g., 3 total — Front left, Back center, Garage right" />
            </LabelInputContainer>

            <LabelInputContainer className="col-span-1 md:col-span-2">
              <Label className="text-white" htmlFor="notes">Special Requests / Notes</Label>
              <Textarea className="z-20 text-white relative" id="notes" placeholder="Any other project-specific notes..." />
            </LabelInputContainer>

            <Button variant={"secondary"} className="col-span-1 md:col-span-2 relative z-20">
              Add Project
            </Button>
          </div>
        </form>

      </div>
      <BackgroundBeams />
    </div>
  )
}

export default invoice



