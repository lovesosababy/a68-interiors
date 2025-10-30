export interface Project {
  slug: string
  title: string
  location: string
  year: string
  summary: string
  image: {
    src: string
    alt: string
    width: number
    height: number
    blurDataURL?: string
  }
}

export const projects: Project[] = [
  {
    slug: "coal-harbour-loft",
    title: "Coal Harbour Loft",
    location: "Vancouver, BC",
    year: "2025",
    summary: "A warm, modern loft with oak, limestone, and soft textures.",
    image: {
      src: "/projects/coal-harbour.jpg",
      alt: "Modern living room interior at Coal Harbour Loft with natural light and contemporary furnishings",
      width: 1920,
      height: 1440,
    },
  },
  {
    slug: "kitsilano-townhouse",
    title: "Kitsilano Townhouse",
    location: "Vancouver, BC",
    year: "2024",
    summary: "Light-filled rooms with concealed storage and tactile palette.",
    image: {
      src: "/projects/kitsilano-townhouse.jpg",
      alt: "Bright kitchen and dining area in Kitsilano Townhouse with custom cabinetry",
      width: 1920,
      height: 1440,
    },
  },
  {
    slug: "gastown-office",
    title: "Gastown Office",
    location: "Vancouver, BC",
    year: "2024",
    summary: "Collaborative workspace in a heritage building.",
    image: {
      src: "/projects/gastown-office.jpg",
      alt: "Open office interior in Gastown with exposed brick walls and modern workspace",
      width: 1920,
      height: 1440,
    },
  },
  {
    slug: "west-vancouver-home",
    title: "West Vancouver Home",
    location: "West Vancouver, BC",
    year: "2023",
    summary: "Family home celebrating indoor-outdoor living.",
    image: {
      src: "/projects/west-van-home.jpg",
      alt: "Spacious living area with floor-to-ceiling windows overlooking the ocean in West Vancouver",
      width: 1920,
      height: 1440,
    },
  },
]


