export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrls: string[];
  projectUrl: string;
  details: {
    title: string;
    description: string;
    tags: string[];
    imageUrls: string[];
  };
}
