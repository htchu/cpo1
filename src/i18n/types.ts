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
    course: string;
    syllabus: string;
    teaching_log: string;
    student_profile: string;
    emi_teaching: string;
    teaching_methods: string;
    platforms_tools: string;
    emi_resources: string;
    observation: string;
    schedule: string;
    guidelines: string;
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
  syllabus: {
    title: string;
    plan_name: string;
    course_info: {
      instructor: string;
      program: string;
      course: string;
      semester: string;
      credits: string;
      class: string;
      students: string;
      venue: string;
      attribute: string;
    };
    overview_title: string;
    overview: string;
    spiral_title: string;
    spiral_description: string;
    phase1_title: string;
    phase1_description: string;
    phase1_steps: Array<{ label: string; text: string }>;
    phase2_title: string;
    phase2_description: string;
    phase2_steps: Array<{ label: string; text: string }>;
    schedule_title: string;
    schedule_headers: {
      week: string;
      topic: string;
      description: string;
      phase: string;
    };
    weeks: Array<{
      week: string;
      topic: string;
      description: string;
      tag: string;
    }>;
    outcomes_title: string;
    outcomes: Array<{ category: string; text: string }>;
    outputs_title: string;
    outputs: string[];
  };
  teaching_log: {
    title: string;
    description: string;
    lectures: Array<{
      week: string;
      title: string;
      file: string;
    }>;
  };
  student_profile: {
    title: string;
    description: string;
    coming_soon: string;
  };
  teaching_methods: {
    title: string;
    subtitle: string;
    intro: string;
    esap_title: string;
    esap_points: string[];
    methods_title: string;
    methods: Array<{
      name: string;
      description: string;
      highlights: string[];
    }>;
    theory_title: string;
    theories: Array<{
      name: string;
      author: string;
      description: string;
    }>;
  };
  platforms_tools: {
    title: string;
    description: string;
    platforms_title: string;
    tools_title: string;
    items: Array<{
      name: string;
      category: string;
      image: string;
      description: string;
    }>;
  };
  emi_resources: {
    title: string;
    description: string;
    coming_soon: string;
  };
  footer: {
    copyright: string;
    department: string;
  };
}
