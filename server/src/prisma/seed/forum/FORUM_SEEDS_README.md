# Forum Seed Data

This directory contains seed data for the forum feature, organized into three main models:

## Structure

1. **forumSection** - Sub-forums/Categories (16 sections)
2. **forumTopic** - Discussion topics within sections (~52 topics)
3. **forumMessage** - Messages/replies within topics (varied count)

## Seed Files

- `forumSections.seed.ts` - Creates the 16 forum sections
- `forumTopics.seed.ts` - Creates topics across all sections
- `forumMessages.seed.ts` - Creates messages/conversations in topics
- `runForumSeeds.ts` - Runs all three seeds in the correct order

## Usage

### Run all forum seeds at once (RECOMMENDED)

```bash
node --import=tsx src/prisma/seed/runForumSeeds.ts
```

This command will:

1. **Delete all existing forum data** (messages, topics, sections)
2. **Seed fresh data** in the correct order
3. **Display a summary** of created items

You can run this command multiple times without worrying about duplicate data - it always starts fresh!

### Run individual seeds (Advanced)

⚠️ **Warning**: Running individual seeds requires manual cleanup and the correct order.

```bash
# Sections only
node --import=tsx src/prisma/seed/forumSections.seed.ts

# Topics only (requires sections to exist)
node --import=tsx src/prisma/seed/forumTopics.seed.ts

# Messages only (requires topics to exist)
node --import=tsx src/prisma/seed/forumMessages.seed.ts
```

## Data Details

### Author

All seed data uses the admin user ID: `cmhvrbegp00000t6clypmvbvh`

### Date Variance

Creation dates are varied from 1 to 90 days ago to facilitate testing of:

- Sorting by date
- Recent vs. older content
- Activity patterns
- Time-based filtering

### Topics Features

- Some topics are **pinned** (important announcements)
- Topics have different **statuses**: `open`, `solved`, `closed`
- **View counts** vary to simulate popularity
- Topics span all 16 forum sections

### Messages Features

- Multiple messages per topic (conversations)
- Some messages marked as **solution** (`solutionMessage: true`)
- Messages have varied timing (hours apart to days apart)
- Content in French, appropriate for senior audience

## Forum Sections

1. Règlements & Annonces
2. Bienvenue & Présentations
3. Vie quotidienne
4. Santé & Bien-être
5. Retraite & Droits
6. Aide numérique
7. Loisirs & Passions
8. Voyages & Découvertes
9. Famille & Relations
10. Habitat & Vie pratique
11. Aides & Services
12. Actualité & Société
13. Témoignages & Partages d'expériences
14. Associations & Engagement
15. Coup de pouce entre membres
16. Le Café du forum

## Content Themes

The seed data includes realistic French content covering:

- Practical questions and answers
- Community discussions
- Help requests and solutions
- Personal experiences and testimonials
- Tips and advice sharing
- Casual conversation

## Testing Scenarios

This seed data supports testing:

- Forum navigation and browsing
- Topic sorting (by date, views, status)
- Message threading and conversations
- Search functionality
- Pinned topics display
- Solution marking
- Activity indicators
- User engagement patterns
