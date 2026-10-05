import type { CSSProperties, ReactNode } from "react";

const colors = {
  ink: "#0f0f12",
  muted: "#5d5d61",
  purple: "#a743f4",
  blue: "#3d78ef",
};

const styles: Record<string, CSSProperties> = {
  page: {
    boxSizing: "border-box",
    minHeight: "100vh",
    padding: "52px 24px 28px",
    background: "#fff",
    color: colors.ink,
    fontFamily: 'Avenir, "Trebuchet MS", sans-serif',
  },
  card: {
    width: "min(100%, 790px)",
    margin: "0 auto",
  },
  intro: {
    textAlign: "center",
    marginBottom: 42,
  },
  avatar: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    width: 150,
    height: 150,
    margin: "0 auto 38px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${colors.purple}, ${colors.blue})`,
    color: "white",
    fontSize: 48,
    letterSpacing: -2,
  },
  badge: {
    position: "absolute",
    right: -3,
    bottom: 3,
    display: "grid",
    placeItems: "center",
    width: 36,
    height: 36,
    border: "4px solid white",
    borderRadius: "50%",
    background: "#f2b400",
    fontSize: 21,
    lineHeight: 1,
  },
  name: {
    margin: 0,
    fontSize: "clamp(38px, 6vw, 47px)",
    fontWeight: 500,
    lineHeight: 1.1,
    letterSpacing: -1.5,
  },
  role: {
    margin: "14px 0 10px",
    color: colors.muted,
    fontSize: "clamp(23px, 4vw, 30px)",
    lineHeight: 1.2,
  },
  experience: {
    margin: 0,
    color: colors.muted,
    fontSize: "clamp(20px, 3.5vw, 25px)",
  },
  sectionHeading: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    margin: "0 0 20px",
    fontSize: 25,
    fontWeight: 500,
  },
  icon: {
    flex: "0 0 29px",
    width: 29,
    height: 29,
    color: colors.ink,
  },
  about: {
    margin: "0 0 34px",
    fontSize: 20,
    lineHeight: 1.5,
  },
  details: {
    display: "grid",
    gap: 14,
    marginBottom: 36,
  },
  detail: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    fontSize: 20,
  },
  skillList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginBottom: 35,
  },
  skill: {
    padding: "8px 22px",
    border: "1px solid #ddd7f6",
    borderRadius: 24,
    background: "linear-gradient(180deg, #f1eaff, #f7f4ff)",
    color: "#963de6",
    fontSize: 18,
    fontWeight: 700,
  },
  button: {
    display: "block",
    width: "100%",
    padding: "15px 20px",
    border: 0,
    borderRadius: 14,
    background: `linear-gradient(100deg, ${colors.purple}, ${colors.blue})`,
    color: "white",
    font: "inherit",
    fontSize: 22,
    fontWeight: 700,
    cursor: "pointer",
  },
};

type IconName = "briefcase" | "mail" | "phone" | "pin" | "calendar" | "cap";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    briefcase: <><rect x="3" y="8" width="18" height="12" rx="1" /><path d="M8 8V5h8v3M3 12h18M10 12v3h4v-3" /></>,
    mail: <><rect x="2" y="5" width="20" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M5.5 3.5 9 7 7 9c1.4 2.8 3.2 4.6 6 6l2-2 3.5 3.5c-1.1 2.2-3.2 2.8-5.2 2.1C8.1 16.8 4.2 12.9 2.4 7.7 1.7 5.7 3.3 3.6 5.5 3.5Z" />,
    pin: <><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 3v4M17 3v4M3 10h18" /></>,
    cap: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v7" /></>,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" style={styles.icon} fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function SectionHeading({ icon, children }: { icon: IconName; children: ReactNode }) {
  return <h2 style={styles.sectionHeading}><Icon name={icon} />{children}</h2>;
}

export default function ProfileDetail() {
  return (
    <main style={styles.page}>
      <article style={styles.card}>
        <header style={styles.intro}>
          <div style={styles.avatar} aria-label="Emma Liu avatar">
            EL
            <span style={styles.badge} aria-label="Featured profile">
                <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" /></svg>
            </span>
          </div>
          <h1 style={styles.name}>Emma Liu</h1>
          <p style={styles.role}>Full Stack Developer</p>
          <p style={styles.experience}>5+ years experience</p>
        </header>

        <section>
          <SectionHeading icon="briefcase">About</SectionHeading>
          <p style={styles.about}>
            Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and contributing to open-source projects. Always eager to learn new technologies and share knowledge with the community.
          </p>
        </section>

        <section style={styles.details} aria-label="Contact details">
          <div style={styles.detail}><Icon name="mail" /><span>emma.liu@email.com</span></div>
          <div style={styles.detail}><Icon name="phone" /><span>+1 (555) 987-6543</span></div>
          <div style={styles.detail}><Icon name="pin" /><span>Seattle, WA</span></div>
          <div style={styles.detail}><Icon name="calendar" /><span>Available for freelance</span></div>
        </section>

        <section>
          <SectionHeading icon="cap">Skills</SectionHeading>
          <div style={styles.skillList}>
            {["React", "Typescript", "Design Systems", "Figma"].map((skill) => <span key={skill} style={styles.skill}>{skill}</span>)}
          </div>
        </section>

        <a href="mailto:emma.liu@email.com" style={{ ...styles.button, textAlign: "center", textDecoration: "none" }}>
          Get In Touch
        </a>
      </article>
    </main>
  );
}
