import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from './portfolioData';

test('portfolio author and contact details match verified specifications', () => {
  assert.equal(PORTFOLIO_DATA.profile.name, 'Munshi Sariful Islam');
  assert.equal(PORTFOLIO_DATA.profile.email, 'munshsarif176@gmail.com');
  assert.equal(PORTFOLIO_DATA.profile.github, 'https://github.com/MunshiSarifulIslam');
  assert.equal(PORTFOLIO_DATA.profile.linkedin, 'https://www.linkedin.com/in/munshisarifulislam/');
});

test('professional experience contains verified Accenture and TCS tenures', () => {
  assert.equal(PORTFOLIO_DATA.experiences.length, 2);
  
  const accenture = PORTFOLIO_DATA.experiences.find(e => e.company.includes('Accenture'));
  assert.ok(accenture, 'Accenture experience must be present');
  assert.equal(accenture?.period, 'August 2026 – Present');
  assert.equal(accenture?.current, true);

  const tcs = PORTFOLIO_DATA.experiences.find(e => e.company.includes('Tata Consultancy Services'));
  assert.ok(tcs, 'TCS experience must be present');
  assert.equal(tcs?.period, 'January 2022 – August 2026');
  assert.ok(tcs?.highlights.some(h => h.includes('1000+ operational users')));
  assert.ok(tcs?.highlights.some(h => h.includes('15%')));
});

test('enterprise projects include all requested production applications', () => {
  const titles = PORTFOLIO_DATA.enterpriseProjects.map(p => p.title);
  assert.ok(titles.some(t => t.includes('Cabin Crew Voyage Report')));
  assert.ok(titles.some(t => t.includes('Pilot Plus Enterprise App')));
  assert.ok(titles.some(t => t.includes('Inspect & Sustain')));
});

test('personal projects include dWater and Let\'s Calculate', () => {
  const titles = PORTFOLIO_DATA.personalProjects.map(p => p.title);
  assert.ok(titles.some(t => t.includes('dWater')));
  assert.ok(titles.some(t => t.includes('Let\'s Calculate')));
});

test('AI projects explicitly include demonstration disclosure flags', () => {
  assert.ok(PORTFOLIO_DATA.aiProjects.poleInspection.disclaimer.includes('DEMONSTRATION DATA'));
  assert.equal(PORTFOLIO_DATA.aiProjects.socialSentiment.status, 'AI Project Concept');
  assert.ok(PORTFOLIO_DATA.aiProjects.poleInspection.categories.length === 4);
});

test('skills are organized into the 5 designated categories', () => {
  const categories = PORTFOLIO_DATA.skillCategories.map(c => c.category);
  assert.deepEqual(categories, [
    'Core iOS Development',
    'Architecture & Design Patterns',
    'Networking & Persistence',
    'Testing & CI/CD',
    'AI/ML & Generative AI Learning'
  ]);

  for (const group of PORTFOLIO_DATA.skillCategories) {
    assert.ok(group.skills.length > 0, `Category ${group.category} must not be empty`);
  }
});
