export interface TimelineItem {
  id: string;
  type: "work" | "education";
  company: string;
  title: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}
