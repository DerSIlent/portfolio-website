import React from 'react';
import { Section } from './components/Section';
import { TypewriterReveal } from './components/TypewriterReveal';
import { EducationEntry } from './components/EducationEntry';
import { ContactInfo } from './components/ContactInfo';
import { SkillBadge } from './components/SkillBadge';
import { WorkExperience } from './components/WorkExperience';

const skills = ['Kotlin', 'Dart', 'Java', 'PHP', 'Docker', 'Jenkins', 'Firebase', 'Strapi', 'Phalcon', 'Laravel', 'Swift', 'JavaScript', 'Go'];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <TypewriterReveal>
          <header className="mb-12 border-b pb-8">
            <h1 className="text-4xl font-bold mb-4">Stephan Dwayne Ruiz</h1>
            <ContactInfo />
          </header>
        </TypewriterReveal>

        {/* Objective */}
        <Section title="Objective" delay={150}>
          <p className="text-gray-700">
            Recent Information Technology graduate with 3+ years of hands-on experience in mobile and web development, seeking a challenging Software Developer position. Bringing expertise in Android development, backend technologies, and a proven track record of delivering successful projects across various domains including e-governance, healthcare, and fitness applications.
          </p>
        </Section>

        {/* Education */}
        <Section title="Education" delay={300}>
          <div className="space-y-4">
            <EducationEntry 
              school="NHL Stenden — Emmen"
              degree="Bachelor of Science in Information Technology"
              graduationInfo="Graduated: January 2025"
            />
            <EducationEntry 
              school="Collegio Arubano — Oranjestad"
              degree="Havo"
              graduationInfo="Graduated: June 2019"
              tooltip="HAVO (Hoger Algemeen Voortgezet Onderwijs) is a senior general secondary education in the Dutch system, typically completed in 5 years. It prepares students for universities of applied sciences."
            />
            <EducationEntry 
              school="Maria College — Oranjestad"
              degree="Mavo"
              graduationInfo="Graduated: June 2015"
              tooltip="MAVO (Middelbaar Algemeen Voortgezet Onderwijs) is a junior general secondary education in the Dutch system, typically completed in 4 years. It provides a foundation for further vocational education or HAVO."
            />
          </div>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills" delay={450}>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" delay={600}>
          <div className="space-y-8">
            <WorkExperience
              title="Software Developer Intern/Employee"
              company="Digitect B.V."
              location="Amsterdam, Netherlands"
              period="October 2024 – Present"
              responsibilities={[
                'Worked on an VS-Code compliant editor for desktop and cloud',
                'Created a GO daemon in charge of handling CLI and heavy work-load',
                'Created a pipeline that allows for easy building',
              ]}
            />
            <WorkExperience
              title="Android Developer Intern/Employee"
              company="DTT Multimedia"
              location="Amsterdam, Netherlands"
              period="January 2022 – July 2024"
              responsibilities={[
                'Worked with various clients ranging from small to large scale projects',
                'Developed applications using Flutter and Native Android',
                'Expanded expertise to backend development using Strapi, Phalcon and Laravel',
                'Contributed to event apps, mental health apps, and fitness apps',
                'Worked in a small company with high expectations and successful track record',
                'Gained experience across multiple app categories including events, mental health, and fitness'
              ]}
            />
            <WorkExperience
              title="Software Developer Intern/Employee"
              company="FuturaLab"
              location="Oranjestad, Aruba"
              period="January 2021 – December 2021"
              responsibilities={[
                'Led development of e-governance pilot project focusing on interoperability between government departments',
                'Implemented secure data exchange solutions and improved interdepartmental communication',
                'Developed proof of concept for ambitious government initiative',
                'Utilized technologies including Docker, NodeJS/Express, Ubuntu, and Kafka message broker',
                'Focused on maintaining security during data exchange processes'
              ]}
            />
            <WorkExperience
              title="Software Developer Intern"
              company="Setar NV"
              location="Noord, Aruba"
              period="January 2021 – June 2021"
              responsibilities={[
                'Created proof-of-concept app incorporating improvements suggested by supervisors and managers',
                'Developed internal event tracking application to replace tedious manual methods',
                'Implemented user registration system for improved event management',
                'Streamlined internal processes through application development'
              ]}
            />
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages" delay={750}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { language: 'English', level: 'Fluent' },
              { language: 'Papiemento', level: 'Native' },
              { language: 'Dutch', level: 'Beginner/Intermediate' },
              { language: 'Spanish', level: 'Beginner' }
            ].map(({ language, level }) => (
              <div key={language}>
                <p className="font-semibold">{language}</p>
                <p className="text-gray-600">{level}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Extracurricular Activities */}
        <Section title="Extracurricular Activities" delay={900}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hackatrain Amsterdam 2021</li>
            <li>X-Honours member of NHL Stenden</li>
            <li>Hackathon Den Bosch 2019</li>
          </ul>
        </Section>

        {/* Interests */}
        <Section title="Interests" delay={1050}>
          <p className="text-gray-700">
            Football, table tennis, beach tennis, futsal, board games, cooking, and baking
          </p>
        </Section>

        {/* References */}
        <Section title="References" delay={1200}>
          <p className="text-gray-700">
            Letter of recommendation available upon request from DTT Multimedia
          </p>
        </Section>
      </main>
    </div>
  );
}

export default App;