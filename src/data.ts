import { ServiceItem, ReviewItem, ContactInfo } from './types';

// Asset paths
import logoImg from './assets/images/sf_sofa_logo_1787922567269.jpg';
import heroImg from './assets/images/hero_sofa_1787922586038.jpg';

import fabricBeforeImg from './assets/images/fabric_before_1787922609721.jpg';
import fabricAfterImg from './assets/images/fabric_after_1787922630989.jpg';

import upholsteryBeforeImg from './assets/images/upholstery_before_1787922649059.jpg';
import upholsteryAfterImg from './assets/images/upholstery_after_1787922665263.jpg';

import frameBeforeImg from './assets/images/frame_before_1787922679032.jpg';
import frameAfterImg from './assets/images/frame_after_1787922693605.jpg';

import foamBeforeImg from './assets/images/foam_before_1787922721276.jpg';
import foamAfterImg from './assets/images/foam_after_1787922739947.jpg';

import customBeforeImg from './assets/images/custom_before_1787922758880.jpg';
import customAfterImg from './assets/images/custom_3seater_after_1787923666709.jpg';

export const ASSETS = {
  logo: logoImg,
  hero: heroImg,
  fabric: {
    before: fabricBeforeImg,
    after: fabricAfterImg,
  },
  upholstery: {
    before: upholsteryBeforeImg,
    after: upholsteryAfterImg,
  },
  frame: {
    before: frameBeforeImg,
    after: frameAfterImg,
  },
  foam: {
    before: foamBeforeImg,
    after: foamAfterImg,
  },
  custom: {
    before: customBeforeImg,
    after: customAfterImg,
  },
};

export const CONTACT_INFO: ContactInfo = {
  phone: '9313643395',
  phoneDisplay: '9313643395',
  whatsapp: '9313643395',
  whatsappLink: 'https://wa.me/919313643395?text=Hello%20SF%20Sofa%20Centre%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20sofa%20repair%2Fcustomization%20services%20in%20Delhi%20%2F%20Noida.',
  email: 'sfsofacentre@gmail.com',
  serviceAreas: 'Delhi & Noida',
};

export const BRAND_MESSAGE = {
  headline: 'Revive the Comfort. Redefine the Look.',
  subheadline: 'Expert sofa repair, restoration and customization services across Delhi & Noida.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fabric-change',
    number: '01',
    title: 'Fabric Change',
    tagline: 'Fresh Luxury Fabrics & Precision Fitting',
    description: 'Give your old sofa a completely refreshed appearance with professionally fitted new fabric.',
    beforeImage: ASSETS.fabric.before,
    afterImage: ASSETS.fabric.after,
    beforeDetails: [
      'Extremely dirty sofa & heavy stains',
      'Faded and discolored fabric',
      'Worn-out, clearly neglected condition',
    ],
    afterDetails: [
      'Fresh premium high-durability fabric',
      'Extremely clean, immaculate finish',
      'Showroom-level brand new appearance',
    ],
    features: ['Hundreds of Premium Fabric Swatches', 'Stain-Resistant & Pet-Friendly Options', 'Exact Tailored Fit'],
  },
  {
    id: 'upholstery',
    number: '02',
    title: 'Upholstery',
    tagline: 'Expert Stitching, Piping & Tight Tailoring',
    description: 'Professional upholstery work focused on comfort, appearance and a clean premium finish.',
    beforeImage: ASSETS.upholstery.before,
    afterImage: ASSETS.upholstery.after,
    beforeDetails: [
      'Extremely torn upholstery & frayed seams',
      'Loose, sagging fabric sections',
      'Severely damaged seating surface',
    ],
    afterDetails: [
      'Professionally fitted luxury upholstery',
      'Smooth, wrinkle-free fabric & clean stitching',
      'Excellent master-artisan finishing',
    ],
    features: ['Reinforced Double Stitching', 'Velvet, Leatherette & Chenille', 'Precision Edge Piping'],
  },
  {
    id: 'frame-repair',
    number: '03',
    title: 'Frame Repair',
    tagline: 'Structural Strength, Joint Realignment & Springing',
    description: 'Restore damaged or weakened sofa frames to improve structural strength and stability.',
    beforeImage: ASSETS.frame.before,
    afterImage: ASSETS.frame.after,
    beforeDetails: [
      'Severely cracked or broken wooden frame',
      'Loose structural components & bent springs',
      'Exposed, weakened structural condition',
    ],
    afterDetails: [
      'Properly repaired & reinforced frame',
      'Strong, aligned hardwood structure',
      'Secure heavy-duty steel bracing & webbing',
    ],
    features: ['Teak & Solid Wood Reinforcement', 'Heavy-Gauge Spring Restringing', 'Rock-Solid Stability'],
  },
  {
    id: 'foam-renewal',
    number: '04',
    title: 'Foam Renewal',
    tagline: 'High-Density Ergonomic Cushion Replacement',
    description: 'Replace old, compressed and uncomfortable foam with fresh cushioning for improved comfort.',
    beforeImage: ASSETS.foam.before,
    afterImage: ASSETS.foam.after,
    beforeDetails: [
      'Severely sunken, flattened cushions',
      'Heavily compressed, tired foam',
      'Uneven seating & poor posture support',
    ],
    afterDetails: [
      'Plump, buoyant high-density cushions',
      'Fresh premium foam with shape retention',
      'Even seating & supreme seating comfort',
    ],
    features: ['32D - 50D High Density Foam Options', 'Memory Foam & Feather Topping', 'Long-Lasting Shape Rebound'],
  },
  {
    id: 'total-customization',
    number: '05',
    title: 'Total Customization',
    tagline: 'Bespoke Design, Dimensions & Luxury Styling',
    description: 'Transform your sofa according to your preferred design, size, fabric, shape and comfort requirements.',
    beforeImage: ASSETS.custom.before,
    afterImage: ASSETS.custom.after,
    beforeDetails: [
      'Extremely outdated vintage design',
      'Clumsy bulky proportions & worn appearance',
      'Unattractive overall aesthetic',
    ],
    afterDetails: [
      'Bespoke handcrafted 3-seater designer sofa',
      'Custom proportions, rich velvet fabric & tailored finish',
      'Luxury showroom-quality showpiece result',
    ],
    features: ['Custom 3-Seater, L-Shape & Recliner Builds', 'Dimensions Tailored to Your Living Room', 'Designer Hardware & Solid Timber Legs'],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'review-1',
    name: 'Sushant Kapoor',
    rating: 5,
    location: 'Delhi',
    date: 'Verified Client',
    reviewText: 'Add verified customer review here.',
  },
  {
    id: 'review-2',
    name: 'Nikita Bajpai',
    rating: 5,
    location: 'Noida',
    date: 'Verified Client',
    reviewText: 'Add verified customer review here.',
  },
  {
    id: 'review-3',
    name: 'Prashant Talan',
    rating: 5,
    location: 'Delhi',
    date: 'Verified Client',
    reviewText: 'Add verified customer review here.',
  },
];

export const WHY_US_ITEMS = [
  {
    title: 'Professional Sofa Work',
    description: 'Master craftsmen dedicated exclusively to meticulous sofa restoration and upholstery precision.',
  },
  {
    title: 'Quality Materials',
    description: 'Top-grade fabrics, high-resilience foam densities, and solid seasoned timber for lasting longevity.',
  },
  {
    title: 'Premium Finishing',
    description: 'Impeccable piping, clean double-stitching, and showroom-standard inspection before delivery.',
  },
  {
    title: 'Customized Solutions',
    description: 'Tailored dimensions, firmness levels, fabric textures, and designs configured to your living space.',
  },
  {
    title: 'Serving Delhi & Noida',
    description: 'Prompt doorstep inspection, fabric swatch demonstrations, and seamless pickup and drop services.',
  },
];
