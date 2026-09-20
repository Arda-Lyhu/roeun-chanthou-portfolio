# 📖 Portfolio Data Guide & Clean Editing Flow

This portfolio is architected so you can **easily edit, add, or fetch data** without breaking any layout or styling.

---

## 🎯 Option 1: Edit Data Locally (Fastest & Simplest)

All content is centralized in **[`src/data/portfolioData.js`](file:///Users/vitou/Documents/my_portfolio/my_portfolio/roeun-portfolio/src/data/portfolioData.js)**:

1. **Profile & Contact Info**: Edit `profileData` at the top of the file (Name, email, phone, location, bio).
2. **Projects**: Add/edit items in `projects` array. Simply copy an existing object and modify:
   ```javascript
   {
     id: "my-new-app",
     title: "My New Flutter App",
     category: "Mobile Apps", // Matches projectCategories
     subtitle: "Short description",
     description: "Full overview...",
     image: "/projects/my-screenshot.png", // Put image in public/projects/
     githubUrl: "https://github.com/Roeun-Chanthou/...",
     tech: ["Flutter", "Dart", "ASP.NET Core"],
     highlights: ["Key feature 1", "Key feature 2"],
     stats: { stars: 10, forks: 2, year: "2024" }
   }
   ```
3. **Skills**: Add or rename skills under `skillCategories`.
4. **Experience & Education**: Update `experiences` or `educationAndLearning` objects.

---

## 🌐 Option 2: Fetch Data Dynamically from a REST API / Backend

You can fetch your data from an **ASP.NET Core Web API**, Firebase, or any JSON endpoint!

### Example: Fetching from your ASP.NET Core API in a component or hook:

```javascript
import React, { useState, useEffect } from "react";

export default function MyCustomComponent() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your real ASP.NET Core API endpoint
    fetch("https://your-api.com/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map((p) => (
        <h3 key={p.id}>{p.title}</h3>
      ))}
    </div>
  );
}
```

### Live GitHub Profile Fetch (Built-In)
We have included a custom hook at **[`src/hooks/usePortfolioData.js`](file:///Users/vitou/Documents/my_portfolio/my_portfolio/roeun-portfolio/src/hooks/usePortfolioData.js)** which automatically queries `https://api.github.com/users/Roeun-Chanthou` to fetch your real public repository counts and avatar.
