export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeDetails: string[];
  afterDetails: string[];
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  location: string;
  date: string;
  reviewText: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  serviceAreas: string;
}
