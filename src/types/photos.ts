export type PhotoSubmissionStatus = "pending" | "approved" | "rejected" | "draft";

export type PhotoSubmission = {
  id: string;
  created_at: string;
  updated_at: string;

  submitter_name: string | null;
  submitter_email: string | null;
  credit_name: string | null;

  site: string;
  town: string | null;
  location_name: string | null;
  description: string | null;

  image_url: string;
  image_path: string;

  permission_confirmed: boolean;

  status: PhotoSubmissionStatus;
  featured: boolean;
  needs_review: boolean;
  source_type: string;
};