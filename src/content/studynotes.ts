// src/content/studynotes.ts

export interface StudyNote {
    title: string;       // e.g., "Neetcode 150"
    url: string;         // Link to the main Notion page
    description: string; // A short description
    desc_url?: string;   // Optional URL for the description
  }
  
  /**
   * Your array of study notes
   */
// src/content/studynotes.ts

export const studyNotes: StudyNote[] = [
    {
      title: "Neetcode Roadmap",
      url: "https://infrequent-iguana-9fa.notion.site/Neetcode-Roadmap-170958dcd95580af90e8d17cc81f53b8",
      description: "My personal notes based on the Neetcode roadmap",
      desc_url: "https://neetcode.io/roadmap"
    },
    {
      title: "Practical Ethical Hacking",
      url: "https://infrequent-iguana-9fa.notion.site/Practical-Ethical-Hacking-OSCP-170958dcd95580fd8289ff5b1ed1a905",
      description: "Notes related to Practical Ethical Hacking by Heath Adams",
      desc_url: "https://academy.tcm-sec.com/"
    }
    // Add more if you like
  ];