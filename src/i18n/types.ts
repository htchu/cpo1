export interface Dictionary {
  site: {
    title: string;
    subtitle: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    emi_community: string;
    peer_observation: string;
    schedule: string;
    resources: string;
    feedback: string;
  };
  home: {
    hero_title: string;
    hero_subtitle: string;
    hero_description: string;
    cta_schedule: string;
    cta_about: string;
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  emi_community: {
    title: string;
    subtitle: string;
    intro: string;
    course_title: string;
    course_instructor: string;
    course_name_zh: string;
    course_name_en: string;
    members_title: string;
    members: Array<{
      name: string;
      school: string;
      department: string;
      role: string;
    }>;
    activities_title: string;
    activities: string[];
    qa_title: string;
    qa_items: string[];
    rubric_title: string;
    rubric_description: string;
  };
  about: {
    title: string;
    intro: string;
    objectives_title: string;
    objectives: string[];
    process_title: string;
    process_steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    principles_title: string;
    principles: string[];
  };
  schedule: {
    title: string;
    description: string;
    table: {
      week: string;
      date: string;
      time: string;
      location: string;
      topic: string;
      observer: string;
    };
    sessions: Array<{
      week: string;
      date: string;
      time: string;
      location: string;
      topic: string;
      observer: string;
    }>;
  };
  resources: {
    title: string;
    description: string;
    categories: Array<{
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };
  feedback: {
    title: string;
    description: string;
    form: {
      observer_name: string;
      observation_date: string;
      course_topic: string;
      strengths: string;
      suggestions: string;
      additional: string;
      submit: string;
      placeholder_strengths: string;
      placeholder_suggestions: string;
      placeholder_additional: string;
    };
  };
  footer: {
    copyright: string;
    department: string;
  };
}
