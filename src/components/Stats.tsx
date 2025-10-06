import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Trophy, Flame, Loader } from 'lucide-react';

interface GitHubStats {
  totalRepos: number;
  currentStreak: number;
  longestStreak: number;
  totalCommits: number;
}

const Stats = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = 'rafiabdul143';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const fetchGitHubStats = async () => {
    try {
      const query = `
        query {
          user(login: "${GITHUB_USERNAME}") {
            repositories {
              totalCount
            }
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
              totalCommitContributions
            }
          }
        }
      `;
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
      const days = weeks.flatMap((week: any) => week.contributionDays);

      days.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

      let longestStreak = 0,
        tempStreak = 0,
        currentStreak = 0;

      for (let i = 0; i < days.length; i++) {
        if (days[i].contributionCount > 0) {
          tempStreak++;
          longestStreak = Math.max(longestStreak, tempStreak);
        } else tempStreak = 0;
      }

      for (let i = days.length - 1; i >= 0; i--) {
        if (days[i].contributionCount > 0) currentStreak++;
        else break;
      }

      setGithubStats({
        totalRepos: data.data.user.repositories.totalCount,
        currentStreak,
        longestStreak,
        totalCommits: data.data.user.contributionsCollection.totalCommitContributions,
      });
    } catch (err) {
      console.error(err);
      setGithubStats({ totalRepos: 0, currentStreak: 0, longestStreak: 0, totalCommits: 0 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubStats();
  }, []);

  const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!value) return;
      const increment = value / 120;
      const timer = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment;
          if (next >= value) {
            clearInterval(timer);
            return value;
          }
          return next;
        });
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [value]);
    return (
      <motion.span className="text-4xl md:text-5xl font-bold text-blue-400">
        {Math.floor(count).toLocaleString()}
      </motion.span>
    );
  };

  const StatCard = ({ stat, index, platform }: { stat: any; index: number; platform: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 shadow-lg shadow-blue-500/20">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-md`}
        >
          {stat.icon}
        </div>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <AnimatedCounter value={stat.value} />
            <span className="text-lg text-gray-400">{stat.unit}</span>
          </div>
          <h4 className="text-xl font-semibold text-white">{stat.label}</h4>
          <p className="text-sm text-gray-400 uppercase">{platform}</p>
        </div>
      </div>
    </motion.div>
  );

  if (loading || !githubStats)
    return (
      <section className="py-20 bg-black text-center text-white">
        <Loader className="w-6 h-6 animate-spin mx-auto mb-4 text-blue-400" />
        <p>Loading stats...</p>
      </section>
    );

  const githubStatsData = [
    { icon: <Flame />, label: 'Current Streak', value: githubStats.currentStreak, unit: 'days', color: 'from-blue-500 to-cyan-500' },
    { icon: <Trophy />, label: 'Longest Streak', value: githubStats.longestStreak, unit: 'days', color: 'from-indigo-500 to-blue-400' },
    { icon: <Github />, label: 'Repositories', value: githubStats.totalRepos, unit: 'repos', color: 'from-cyan-500 to-blue-400' },
    { icon: <Github />, label: 'Commits', value: githubStats.totalCommits, unit: 'commits', color: 'from-blue-400 to-cyan-500' },
  ];

  return (
    <section className="min-h-screen  bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Decorations */}
    <div className="absolute inset-0">
        {/* Soft gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010815] via-[#010d24] to-[#010d24] opacity-90"></div>


      </div>

      <div className="container mx-auto px-6 mt-3 text-white z-10">
         <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    GITHUB{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 drop-shadow-lg">
                   Stats
                    </span>
                  </motion.h2>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold hover:text-cyan-400 mb-6 inline-block"
        >
          {GITHUB_USERNAME}
        </a>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {githubStatsData.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} platform="GitHub" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
