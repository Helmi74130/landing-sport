# Configuration du Formulaire de Contact avec Hostinger

## 📧 Configuration SMTP Hostinger

### Étape 1 : Récupérer vos identifiants SMTP Hostinger

1. Connectez-vous à votre **Panel Hostinger** (hpanel.hostinger.com)
2. Allez dans **Emails** → **Comptes Email**
3. Sélectionnez l'email que vous souhaitez utiliser
4. Notez les informations suivantes :
   - **Hôte SMTP** : `smtp.hostinger.com`
   - **Port** : `465` (SSL) ou `587` (TLS/STARTTLS)
   - **Votre email** : votre-email@votredomaine.com
   - **Mot de passe** : le mot de passe de votre compte email

### Étape 2 : Créer le fichier .env.local

1. Copiez le fichier exemple :
   ```bash
   cp .env.local.example .env.local
   ```

2. Éditez `.env.local` avec vos vraies informations :
   ```env
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=contact@votredomaine.com
   SMTP_PASS=VotreMotDePasse123
   RECIPIENT_EMAIL=contact@votredomaine.com
   ```

   **Important** : Remplacez `votredomaine.com` par votre vrai nom de domaine !

### Étape 3 : Paramètres recommandés Hostinger

**Pour SSL (Recommandé)** :
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
```

**Pour TLS/STARTTLS** :
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
```

---

## 🧪 Tester le Formulaire

### Méthode 1 : Test en local

1. Lancez votre serveur de développement :
   ```bash
   npm run dev
   ```

2. Ouvrez votre navigateur sur `http://localhost:3000`

3. Scrollez jusqu'au formulaire de contact en bas de page

4. Remplissez le formulaire avec vos informations :
   - **Nom** : Votre nom
   - **Email** : Votre email de test
   - **Sujet** : Test formulaire
   - **Message** : Ceci est un message de test

5. Cliquez sur **"Envoyer le message"**

6. Vérifiez :
   - ✅ Un message de succès apparaît en vert
   - ✅ Le formulaire se réinitialise
   - ✅ Vous recevez l'email à l'adresse configurée dans `RECIPIENT_EMAIL`

### Méthode 2 : Test avec curl

Testez directement l'API :

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Email",
    "message": "Ceci est un message de test"
  }'
```

**Réponse attendue en cas de succès** :
```json
{
  "success": true,
  "message": "Email envoyé avec succès!",
  "messageId": "..."
}
```

### Méthode 3 : Vérifier les logs

Dans votre terminal où tourne `npm run dev`, vous devriez voir :
```
Email envoyé avec succès: <message-id>
```

---

## 🐛 Dépannage

### Problème : "Erreur lors de l'envoi de l'email"

**Solutions** :

1. **Vérifiez vos identifiants** :
   - Email et mot de passe corrects dans `.env.local`
   - Pas d'espaces avant/après les valeurs

2. **Vérifiez le port** :
   - Port 465 nécessite `secure: true`
   - Port 587 nécessite `secure: false` (à modifier dans le code si besoin)

3. **Authentification Hostinger** :
   - Assurez-vous que l'email existe bien dans Hostinger
   - Vérifiez que le mot de passe n'a pas expiré

4. **Firewall** :
   - Certains FAI bloquent le port 587
   - Essayez le port 465 (SSL)

### Problème : "Email invalide"

- Vérifiez le format de l'email dans le formulaire
- L'email doit contenir un `@` et un domaine valide

### Problème : Variables d'environnement non chargées

1. Vérifiez que le fichier s'appelle bien `.env.local` (avec le point au début)
2. Redémarrez votre serveur Next.js après modification du `.env.local`
3. Les variables d'environnement sont chargées au démarrage uniquement

---

## 🔒 Sécurité

**IMPORTANT** :
- ❌ Ne commitez JAMAIS le fichier `.env.local` sur Git
- ✅ Le fichier `.env.local` est déjà dans `.gitignore`
- ✅ Partagez uniquement `.env.local.example` (sans les vraies valeurs)
- ✅ Utilisez des mots de passe forts pour vos emails

---

## 🚀 Déploiement en Production

Lors du déploiement sur Vercel, Netlify, ou autre plateforme :

1. Ajoutez les variables d'environnement dans les paramètres de votre plateforme
2. Ne copiez PAS le fichier `.env.local` sur le serveur
3. Les plateformes modernes ont une interface pour gérer les variables d'environnement

**Exemple Vercel** :
- Project Settings → Environment Variables
- Ajoutez : `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL`

---

## 📝 Personnalisation

### Modifier le template d'email

Éditez le fichier : `app/api/contact/route.ts` ligne 45-75

### Modifier le formulaire

Éditez le fichier : `components/contact-form.tsx`

### Ajouter des champs supplémentaires

1. Ajoutez le champ dans `components/contact-form.tsx`
2. Ajoutez-le dans l'interface `FormData`
3. Incluez-le dans le template email dans `app/api/contact/route.ts`

---

## ✅ Checklist de vérification

- [ ] Fichier `.env.local` créé avec les bonnes informations
- [ ] Serveur de développement redémarré
- [ ] Formulaire visible sur la page d'accueil
- [ ] Test d'envoi réussi
- [ ] Email reçu dans la boîte de réception
- [ ] Message de succès affiché dans le formulaire

---

## 💡 Conseils

1. **Testez d'abord en local** avant de déployer
2. **Utilisez un email dédié** pour le formulaire (ex: contact@votredomaine.com)
3. **Configurez un auto-répondeur** dans Hostinger pour confirmer la réception
4. **Vérifiez vos spams** lors des premiers tests

---

Besoin d'aide ? Vérifiez les logs dans votre terminal !
