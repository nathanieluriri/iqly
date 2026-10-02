import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, ChipToggle, FormField, Input, PageHeader, Select, useToast } from "../ds";
import { USER } from "../data/demo";
import { EDUCATION, GENDERS, HEARD_ABOUT, INTERESTS, OCCUPATIONS, STATES, UNIVERSITIES } from "../data/reference";

const stateOptions = STATES.map((s) => ({ value: s, label: s }));
const uniOptions = UNIVERSITIES.map((u) => ({ value: u, label: u }));
const toggle = (list: string[], v: string) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

export function ProfilePage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <PageHeader title="Profile" description="Manage your details and account settings." />
      <Details />
      <Account />
    </div>
  );
}

function Details() {
  const toast = useToast();
  const [f, setF] = useState({ phone: "08012345678", dob: "2001-04-12", gender: "female", education: "hnd_bsc", city: "Yaba", origin: "Anambra", residence: "Lagos", university: "University of Lagos", heard: "whatsapp" });
  const [occupations, setOccupations] = useState<string[]>(["student"]);
  const [interests, setInterests] = useState<string[]>(["marketing_advertising", "finance_fintech"]);
  const [saving, setSaving] = useState(false);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));
  const student = occupations.includes("student");

  function save() {
    setSaving(true);
    const id = toast.loading("Saving...");
    window.setTimeout(() => {
      setSaving(false);
      toast.success("Profile saved", id);
    }, 800);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField caps label="Phone">
            <Input type="tel" value={f.phone} onChange={set("phone")} />
          </FormField>
          <FormField caps label="Date of birth">
            <Input type="date" value={f.dob} onChange={set("dob")} />
          </FormField>
          <FormField caps label="Gender">
            <Select className="w-full" value={f.gender} onChange={set("gender")} placeholder="Select…" options={GENDERS} />
          </FormField>
          <FormField caps label="Education">
            <Select className="w-full" value={f.education} onChange={set("education")} placeholder="Select…" options={EDUCATION} />
          </FormField>
          <FormField caps label="Country">
            <Input value="Nigeria" disabled />
          </FormField>
          <FormField caps label="City">
            <Input value={f.city} onChange={set("city")} />
          </FormField>
          <FormField caps label="State of origin">
            <Select className="w-full" value={f.origin} onChange={set("origin")} placeholder="Select state" options={stateOptions} />
          </FormField>
          <FormField caps label="State of residence">
            <Select className="w-full" value={f.residence} onChange={set("residence")} placeholder="Select state" options={stateOptions} />
          </FormField>
        </div>
        <ChipGroup label="Occupations" options={OCCUPATIONS} selected={occupations} onToggle={(v) => setOccupations((o) => toggle(o, v))} />
        {student ? (
          <FormField caps label="University">
            <Select className="w-full" value={f.university} onChange={set("university")} placeholder="Select your university" options={uniOptions} />
          </FormField>
        ) : null}
        <ChipGroup label="Interests" options={INTERESTS} selected={interests} onToggle={(v) => setInterests((o) => toggle(o, v))} />
        <FormField caps label="How you heard about us">
          <Select className="w-full" value={f.heard} onChange={set("heard")} placeholder="Select…" options={HEARD_ABOUT} />
        </FormField>
        <div className="flex justify-end">
          <Button onClick={save} disabled={saving}>
            Save changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ChipGroup({ label, options, selected, onToggle }: { label: string; options: { value: string; label: string }[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <fieldset className="space-y-1.5">
      <legend className="mb-1.5 type-label-field-caps text-fg3">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <ChipToggle key={o.value} selected={selected.includes(o.value)} onClick={() => onToggle(o.value)}>
            {o.label}
          </ChipToggle>
        ))}
      </div>
    </fieldset>
  );
}

function Account() {
  const toast = useToast();
  const [name, setName] = useState(USER.name);
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField caps label="Display name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormField>
          <FormField caps label="Email">
            <Input value={USER.email} disabled />
          </FormField>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" disabled={!name.trim()} onClick={() => toast.success("Account updated")}>
            Update name
          </Button>
        </div>
        <div className="border-t border-line pt-5">
          <p className="mb-3 type-body-small-strong text-fg">Change password</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField caps label="Current password">
              <Input type="password" autoComplete="current-password" value={current} onChange={(e) => setCurrent(e.target.value)} />
            </FormField>
            <FormField caps label="New password">
              <Input type="password" autoComplete="new-password" value={next} onChange={(e) => setNext(e.target.value)} />
            </FormField>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              disabled={current.length < 1 || next.length < 8}
              onClick={() => {
                setCurrent("");
                setNext("");
                toast.success("Password changed");
              }}
            >
              Change password
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
