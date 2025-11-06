# Forum Seed - Documentation

## 📋 Description

Ce seed génère des données réalistes pour le forum de la plateforme Elderly, incluant :

- **50+ topics de forum** avec du contenu en français
- **200+ messages** répartis dans les topics
- Topics variés couvrant toutes les catégories du forum
- Messages avec solutions marquées
- Topics épinglés et vues aléatoires
- Contenu réaliste sur des sujets pertinents pour les seniors

## 🚀 Utilisation

### Prérequis

1. Avoir exécuté le seed principal pour créer les utilisateurs et catégories :

```bash
pnpm db:seed
```

2. S'assurer que la base de données est configurée et accessible

### Exécution du seed forum

```bash
cd server
pnpm db:seed:forum
```

## 📊 Données générées

### Topics de forum (20 détaillés + 30 aléatoires)

Les topics détaillés incluent des sujets comme :

- Comment rester actif après 65 ans ?
- Meilleurs exercices de mémoire au quotidien
- Partage de recettes saines et économiques
- Gestion du stress et de l'anxiété
- Applications utiles pour seniors
- Aide pour comprendre ma facture d'électricité
- Bénévolat : vos expériences
- Problèmes de sommeil
- Transports en commun : carte senior
- Prévention des chutes à domicile
- Et bien plus...

### Messages

Chaque topic contient entre 2 et 6 messages avec :

- Contenu en français naturel et pertinent
- Auteurs variés (utilisés aléatoirement parmi les users existants)
- Dates échelonnées sur les 6 derniers mois
- Messages marqués comme "solution" (environ 30% des topics)

### Statistiques

- **50 topics** au total
- **~200 messages** au total
- **10% des topics épinglés** (topics importants)
- **Vues aléatoires** entre 10 et 500 par topic
- **Catégories variées** parmi toutes les catégories forum

## 🔧 Personnalisation

### Modifier le nombre de topics

Dans `src/prisma/seed/forumData.seed.ts`, ajustez la taille du tableau `additionalTopicsTitles` ou modifiez la logique de génération.

### Ajouter des topics détaillés

Ajoutez des entrées dans le tableau `topicsData` avec la structure suivante :

```typescript
{
  title: "Titre du topic",
  pinned: true/false,
  status: "open",
  messages: [
    {
      content: "Contenu du message",
      solutionMessage: false
    },
    // ... autres messages
  ]
}
```

### Modifier les catégories utilisées

Le seed utilise automatiquement toutes les catégories de type FORUM (typeId: 4). Si vous voulez filtrer, modifiez la requête dans `seedForumData()`.

## 🗑️ Nettoyage

Pour supprimer toutes les données du forum et recommencer :

```sql
-- Supprimer tous les messages
DELETE FROM forum_message;

-- Supprimer tous les topics
DELETE FROM forum_topic;
```

Puis relancez le seed.

## 🐛 Dépannage

### Erreur "No users found"

- Assurez-vous d'avoir exécuté le seed principal d'abord : `pnpm db:seed`

### Erreur "No forum categories found"

- Vérifiez que les catégories de type FORUM sont bien créées
- Exécutez le seed des catégories si nécessaire

### Erreur de foreign key

- Vérifiez que tous les utilisateurs et catégories existent
- Assurez-vous que la base de données est dans un état cohérent

## 📝 Notes

- Le premier message de chaque topic est toujours créé par l'auteur du topic
- Les messages suivants sont attribués aléatoirement aux autres utilisateurs
- Les dates sont échelonnées pour simuler une conversation réelle
- Environ 30% des derniers messages sont marqués comme "solution"

## 🔄 Mise à jour

Pour ajouter de nouvelles données sans supprimer les existantes, vous pouvez :

1. Modifier le seed pour ajouter de nouveaux topics
2. Relancer le script (il ajoutera les nouveaux topics)

Ou utiliser directement l'API pour créer des topics/messages via l'interface.
