import { useState, useEffect } from "react";
import * as defaultData from "../data/portfolioData";

/**
 * Custom Hook: usePortfolioData
 * ---------------------------------------------------------------
 * This hook provides a single, unified source of data for the portfolio.
 * 
 * HOW TO USE & EDIT:
 * 1. To edit your data statically: Open `src/data/portfolioData.js` and edit the values.
 * 2. To fetch dynamic data from an API (e.g. your ASP.NET Core API or GitHub API):
 *    Set `ENABLE_REMOTE_FETCH = true` below and provide your API endpoint.
 */

const ENABLE_GITHUB_FETCH = true; // Automatically fetches public repos and avatar from GitHub
const GITHUB_USERNAME = "Roeun-Chanthou";

export function usePortfolioData() {
  const [data, setData] = useState({
    profile: defaultData.profileData,
    heroRoles: defaultData.heroRoles,
    projectCategories: defaultData.projectCategories,
    projects: defaultData.projects,
    skillCategories: defaultData.skillCategories,
    experiences: defaultData.experiences,
    educationAndLearning: defaultData.educationAndLearning,
    socialLinks: defaultData.socialLinks,
  });

  const [loading, setLoading] = useState(false);
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    if (!ENABLE_GITHUB_FETCH) return;

    async function fetchGitHubData() {
      try {
        setLoading(true);
        // Fetch user info from GitHub Public API
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch GitHub profile");
        
        const ghData = await res.json();
        
        setGithubStats({
          publicRepos: ghData.public_repos,
          followers: ghData.followers,
          following: ghData.following,
          bio: ghData.bio,
          avatarUrl: ghData.avatar_url,
        });

        // Optionally update repo count if available
        if (ghData.public_repos) {
          setData((prev) => ({
            ...prev,
            profile: {
              ...prev.profile,
              repositories: `${ghData.public_repos}+`,
            },
          }));
        }
      } catch (err) {
        console.warn("GitHub fetch note: Using default local portfolio data.", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return {
    ...data,
    githubStats,
    loading,
  };
}
