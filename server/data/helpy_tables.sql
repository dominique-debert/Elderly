-- START TRANSACTION
BEGIN;

-- TABLES PRINCIPALES
-- API STATUS: DONE
DROP TABLE IF EXISTS "user";
CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    birth_date DATE,
    address VARCHAR(255),
    gps_coordinates TEXT,
    phone VARCHAR(20),
    profile_picture VARCHAR(255),
    registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    account_verified BOOLEAN NOT NULL DEFAULT FALSE,
    interface_preferences VARCHAR(255),
    two_factor_authentication BOOLEAN NOT NULL DEFAULT FALSE,
    help_points INTEGER DEFAULT 0,
    reduced_mobility BOOLEAN DEFAULT FALSE,
    activity_level VARCHAR(20) CHECK (activity_level IN ('sedentary', 'moderate', 'active')),
    emergency_contact_name VARCHAR(100),
    emergency_contact_phone VARCHAR(20),
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

-- API STATUS: DONE
DROP TABLE IF EXISTS "skill";
CREATE TABLE IF NOT EXISTS "skill" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    category VARCHAR(255),
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "user_skill";
CREATE TABLE IF NOT EXISTS "user_skill" (
    user_id INT NOT NULL,
    skill_id INT NOT NULL,
    level INT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    PRIMARY KEY (user_id, skill_id),
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (skill_id) REFERENCES "skill"(id)
);

DROP TABLE IF EXISTS "notification_preferences";
CREATE TABLE IF NOT EXISTS "notification_preferences" (
    user_id INT PRIMARY KEY REFERENCES "user"(id) ON DELETE CASCADE,
    message_notif BOOLEAN DEFAULT TRUE,
    activity_notif BOOLEAN DEFAULT TRUE,
    help_notif BOOLEAN DEFAULT TRUE,
    forum_notif BOOLEAN DEFAULT TRUE,
    email_notif BOOLEAN DEFAULT TRUE,
    sms_notif BOOLEAN DEFAULT FALSE,
    push_notif BOOLEAN DEFAULT TRUE,
    quiet_hours_start TIME,
    quiet_hours_end TIME,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "notification";
CREATE TABLE IF NOT EXISTS "notification" (  
  id SERIAL PRIMARY KEY,  -- Identifiant unique, clé primaire
  user_id INT REFERENCES "user"(id),  -- Référence à la table USER
  type VARCHAR(50),  -- Type de la notification
  content TEXT,  -- Contenu de la notification
  read BOOLEAN,  -- Indique si la notification a été lue
  action_link VARCHAR(255),  -- Lien d'action pour la notification (par exemple, rediriger vers un autre écran)
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "trust_circle";
CREATE TABLE IF NOT EXISTS "trust_circle" (
    user_id INT NOT NULL,
    contact_id INT NOT NULL,
    date_added DATE,
    access_level VARCHAR,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    PRIMARY KEY (user_id, contact_id),

    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (contact_id) REFERENCES "user"(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS "help_request";
CREATE TABLE IF NOT EXISTS "help_request" (
    id SERIAL PRIMARY KEY,
    creator_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    needed_date TIMESTAMP,
    estimated_duration INT,
    location VARCHAR(255),
    gps_coordinates TEXT,
    category VARCHAR(100),
    recurring BOOLEAN DEFAULT FALSE,
    frequency VARCHAR(50),
    status VARCHAR(50),
    points_offered INT DEFAULT 0,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT fk_creator
        FOREIGN KEY (creator_id)
        REFERENCES "user"(id)
        ON DELETE CASCADE
);

DROP TABLE IF EXISTS "help_offer";
CREATE TABLE IF NOT EXISTS "help_offer" (
    id SERIAL PRIMARY KEY,
    request_id INT NOT NULL,
    helper_id INT NOT NULL,
    offer_date TIMESTAMP NOT NULL,
    message TEXT,
    status VARCHAR(50),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT fk_request
        FOREIGN KEY (request_id)
        REFERENCES "help_request"(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_helper
        FOREIGN KEY (helper_id)
        REFERENCES "user"(id)
        ON DELETE CASCADE
);

DROP TABLE IF EXISTS "service_completed";
CREATE TABLE IF NOT EXISTS "service_completed" (
    id SERIAL PRIMARY KEY,
    request_id INT NOT NULL,
    helper_id INT NOT NULL,
    completion_date TIMESTAMP NOT NULL,
    actual_duration INT,
    creator_comment TEXT,
    helper_comment TEXT,
    creator_rating INT CHECK (creator_rating BETWEEN 0 AND 5),
    helper_rating INT CHECK (helper_rating BETWEEN 0 AND 5),
    points_exchanged INT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT fk_request
        FOREIGN KEY (request_id)
        REFERENCES "help_request"(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_helper
        FOREIGN KEY (helper_id)
        REFERENCES "user"(id)
        ON DELETE SET NULL
);

DROP TABLE IF EXISTS "activity";
CREATE TABLE IF NOT EXISTS "activity" (
    id SERIAL PRIMARY KEY,
    creator_id INT NOT NULL REFERENCES "user"(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP,
    location VARCHAR(255),
    gps_coordinates TEXT,
    max_spots INT,
    category VARCHAR(100),
    recurring BOOLEAN DEFAULT FALSE,
    frequency VARCHAR(100),
    reduced_mobility_access BOOLEAN DEFAULT FALSE,
    difficulty_level VARCHAR(100),
    cost FLOAT,
    status VARCHAR(50),
    weather_requirements VARCHAR(255),
    transport_options VARCHAR(255),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "activity_registration";
CREATE TABLE IF NOT EXISTS "activity_registration" (
    activity_id INT NOT NULL,
    user_id INT NOT NULL,
    registration_date TIMESTAMP NOT NULL,
    status VARCHAR(50),
    attendance_confirmed BOOLEAN DEFAULT FALSE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

	PRIMARY KEY (activity_id, user_id),
    FOREIGN KEY (activity_id) REFERENCES "activity"(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE
);

-- SANTÉ ET BIEN ÊTRE SIMPLIFIÉ
DROP TABLE IF EXISTS "medication_reminder";
CREATE TABLE IF NOT EXISTS "medication_reminder" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    medication_name VARCHAR(255) NOT NULL,
    dosage VARCHAR(100),
    morning_reminder_time TIME,
    noon_reminder_time TIME,
    evening_reminder_time TIME,
    night_reminder_time TIME,
    days_of_week VARCHAR(50), -- Format attendu : "Mon,Tue,Wed,..."
    instructions TEXT,
    active BOOLEAN DEFAULT TRUE,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id) 
        REFERENCES "user"(id) 
        ON DELETE CASCADE
);

DROP TABLE IF EXISTS "health_indicator";
CREATE TABLE IF NOT EXISTS "health_indicator" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user"(id), 
    recording_date DATE NOT NULL,
    step_count INT,
    sleep_duration_minutes INT,
    sleep_quality INT CHECK (sleep_quality >= 1 AND sleep_quality <= 5),  -- Contraintes sur la qualité du sommeil
    weight FLOAT,
    mood VARCHAR(10) CHECK (mood IN ('good', 'average', 'bad')),  -- Contraintes sur l'état d'esprit
    notes TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "trusted_contact";
CREATE TABLE IF NOT EXISTS "trusted_contact" (
    id SERIAL PRIMARY KEY, -- identifiant unique pour chaque contact de confiance
    user_id INT NOT NULL,  -- identifiant de l'utilisateur, clé étrangère
    last_name VARCHAR(255) NOT NULL,  -- nom de famille
    first_name VARCHAR(255) NOT NULL,  -- prénom
    email VARCHAR(255) UNIQUE NOT NULL,  -- email
    phone VARCHAR(20),  -- téléphone
    relationship VARCHAR(50) CHECK (relationship IN ('family', 'friend', 'caregiver')),  -- relation avec l'utilisateur
    share_medications BOOLEAN NOT NULL DEFAULT FALSE,  -- partage des médicaments
    share_health_indicators BOOLEAN NOT NULL DEFAULT FALSE,  -- partage des indicateurs de santé
    share_wellness_activities BOOLEAN NOT NULL DEFAULT FALSE,  -- partage des activités de bien-être
    emergency_alerts BOOLEAN NOT NULL DEFAULT FALSE,  -- alertes d'urgence
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
	
    FOREIGN KEY (user_id) REFERENCES "user"(id) -- clé étrangère vers la table des utilisateurs
);

DROP TABLE IF EXISTS "exercise_program";
CREATE TABLE IF NOT EXISTS "exercise_program" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) CHECK (category IN ('balance', 'strength', 'flexibility', 'cardio')) NOT NULL,
    difficulty_level VARCHAR(50) CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')) NOT NULL,
    adapted_for_reduced_mobility BOOLEAN NOT NULL,
    duration_minutes INT NOT NULL,
    description TEXT,
    video_link VARCHAR(255),
    image VARCHAR(255),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "cognitive_exercise";
CREATE TABLE IF NOT EXISTS "cognitive_exercise" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) CHECK (category IN ('memory', 'attention', 'logic', 'language')) NOT NULL,
    difficulty_level VARCHAR(50) CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')) NOT NULL,
    duration_minutes INT NOT NULL,
    description TEXT,
    image VARCHAR(255),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "nutritional_advice";
CREATE TABLE IF NOT EXISTS "nutritional_advice" (
    id SERIAL PRIMARY KEY,           -- id auto-incrémenté, clé primaire
    title VARCHAR(255) NOT NULL,      -- titre de l'avis nutritionnel
    description TEXT,                 -- description de l'avis
    category VARCHAR(50),             -- catégorie de l'avis
    season VARCHAR(50) CHECK (season IN ('printemps', 'été', 'automne', 'hiver')) NOT NULL,               -- saison à laquelle l'avis s'applique
    image VARCHAR(255),             -- URL ou chemin de l'image associée
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "user_activity";
CREATE TABLE IF NOT EXISTS "user_activity" (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    completion_date DATE NOT NULL,
    exercise_program_id INT,
    cognitive_exercise_id INT,
    duration_minutes INT NOT NULL,
    perceived_difficulty_level INT CHECK (perceived_difficulty_level BETWEEN 1 AND 5),
    enjoyment_level INT CHECK (enjoyment_level BETWEEN 1 AND 5),
    comment TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

	FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (exercise_program_id) REFERENCES "exercise_program"(id),
    FOREIGN KEY (cognitive_exercise_id) REFERENCES "cognitive_exercise"(id)
);

DROP TABLE IF EXISTS "wellness_goal";
CREATE TABLE IF NOT EXISTS "wellness_goal" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) CHECK (category IN ('physical activity', 'cognitive', 'nutrition', 'sleep')) NOT NULL,
    target_value INT NOT NULL,
    unit VARCHAR(50) CHECK (unit IN ('steps', 'minutes', 'sessions', 'etc')) NOT NULL,
    frequency VARCHAR(50) CHECK (frequency IN ('daily', 'weekly', 'monthly')) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "goal_progress";
CREATE TABLE IF NOT EXISTS "goal_progress" (
    id SERIAL PRIMARY KEY,
    goal_id INT NOT NULL,
    recording_date DATE NOT NULL,
    achieved_value INT NOT NULL,
    goal_achieved BOOLEAN NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

	CONSTRAINT fk_goal FOREIGN KEY (goal_id) REFERENCES "wellness_goal"(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS "wellness_badge";
CREATE TABLE IF NOT EXISTS "wellness_badge" (
    id SERIAL PRIMARY KEY,  -- Le type SERIAL est utilisé pour un champ auto-incrémenté
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(50) CHECK (category IN ('physical', 'cognitive', 'nutrition', 'global')) NOT NULL,
    image VARCHAR(255),
    level INT CHECK (level BETWEEN 1 AND 3) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "user_badge";
CREATE TABLE IF NOT EXISTS "user_badge" (
    user_id INT NOT NULL,
    badge_id INT NOT NULL,
    date_obtained DATE NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

	PRIMARY KEY (user_id, badge_id),
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (badge_id) REFERENCES "wellness_badge"(id) ON DELETE CASCADE
);

-- FORUM

CREATE TABLE IF NOT EXISTS "forum_category" (
    id SERIAL PRIMARY KEY,            -- id comme clé primaire, auto-incrémentée
    name VARCHAR(255) NOT NULL,        -- nom de la catégorie
    description VARCHAR(255),          -- description de la catégorie
    parent_category_id INT,            -- ID de la catégorie parent
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP

    --CONSTRAINT fk_parent_category_id FOREIGN KEY (parent_category_id) REFERENCES "forum_category"(id) -- clé étrangère vers la même table
);

DROP TABLE IF EXISTS "forum_topic";
CREATE TABLE IF NOT EXISTS "forum_topic" (
    id SERIAL PRIMARY KEY,                    -- Identifiant unique de chaque topic
    category_id INT NOT NULL,                 -- Référence à la catégorie du forum
    author_id INT NOT NULL,                   -- Référence à l'auteur du topic
    title VARCHAR(255) NOT NULL,              -- Titre du topic
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de création
    pinned BOOLEAN DEFAULT FALSE,             -- Si le topic est épinglé
    status VARCHAR(50),                       -- Statut du topic
    "views" INT DEFAULT 0,                    -- Nombre de vues du topic
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    -- Clés étrangères
    CONSTRAINT fk_category
        FOREIGN KEY (category_id) REFERENCES "forum_category"(id)
        ON DELETE CASCADE,                    -- Suppression en cascade si la catégorie est supprimée

    CONSTRAINT fk_author
        FOREIGN KEY (author_id) REFERENCES "user"(id)
        ON DELETE SET NULL                    -- Met à NULL si l'utilisateur est supprimé
);

DROP TABLE IF EXISTS "forum_message";
CREATE TABLE IF NOT EXISTS "forum_message" (  -- Création de la table 'forum_message'
	id SERIAL PRIMARY KEY,  -- Identifiant unique, clé primaire auto-incrémentée
	topic_id INT,  -- Identifiant du sujet du forum, clé étrangère
	author_id INT,  -- Identifiant de l'auteur du message, clé étrangère
	content TEXT,  -- Contenu du message
	creation_date TIMESTAMP,  -- Date et heure de création du message
	modification_date TIMESTAMP,  -- Date et heure de dernière modification du message
	solution_message BOOLEAN,  -- Indicateur pour savoir si le message est la solution du sujet
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP,

	CONSTRAINT fk_topic_id FOREIGN KEY (topic_id) REFERENCES "forum_topic"(id),  -- Clé étrangère référencée vers la table 'forum_topic'
  	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES "user"(id)  -- Clé étrangère référencée vers la table 'user'
);

-- RESSOURCES & SERVICES

DROP TABLE IF EXISTS "resource";
CREATE TABLE IF NOT EXISTS "resource" (
    id SERIAL PRIMARY KEY,                -- Déclare 'id' comme clé primaire et utilise SERIAL pour l'auto-incrémentation
    title VARCHAR(255) NOT NULL,           -- 'title' est une chaîne de caractères, longueur maximale 255, et ne peut pas être nulle
    content TEXT,                          -- 'content' est un texte, sans limite de taille
    type VARCHAR(100),                     -- 'type' est une chaîne de caractères, longueur maximale 100
    category VARCHAR(100),                 -- 'category' est une chaîne de caractères, longueur maximale 100
    author_id INT,                         -- 'author_id' est un entier qui va être une clé étrangère
    admin_validated BOOLEAN DEFAULT FALSE, -- 'admin_validated' est un booléen, avec une valeur par défaut FALSE
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES "user" (id) -- Définit la contrainte de clé étrangère reliant 'author_id' à 'id' de la table 'user'
);

DROP TABLE IF EXISTS "local_service";
CREATE TABLE IF NOT EXISTS "local_service" (  -- Création de la table LOCAL_SERVICE
    id SERIAL PRIMARY KEY,    -- id : Identifiant unique, clé primaire, auto-incrémenté
    name VARCHAR(255),         -- name : Nom du service, type chaîne de caractères
    category VARCHAR(255),     -- category : Catégorie du service, type chaîne de caractères
    address VARCHAR(255),      -- address : Adresse du service, type chaîne de caractères
    gps_coordinates TEXT,    -- gps_coordinates : Coordonnées GPS sous forme de point (latitude, longitude)
    phone VARCHAR(20),         -- phone : Numéro de téléphone, type chaîne de caractères
    website VARCHAR(255),      -- website : URL du site web, type chaîne de caractères
    description TEXT,          -- description : Description du service, type texte
    hours VARCHAR(100),        -- hours : Horaires d'ouverture, type chaîne de caractères
    senior_friendly BOOLEAN,   -- senior_friendly : Indicateur de l'accessibilité pour les seniors, type booléen
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

-- Création de la table SERVICE_RATING
DROP TABLE IF EXISTS "service_rating";
CREATE TABLE IF NOT EXISTS "service_rating" (  
    service_id INT,  -- Identifiant du service, clé étrangère vers LOCAL_SERVICE(id)
    user_id INT,  -- Identifiant de l'utilisateur, clé étrangère vers USER(id)
    rating INT,  -- Note donnée au service (valeur entière)
    comment TEXT,  -- Commentaire laissé par l'utilisateur
    rating_date TIMESTAMP,  -- Date et heure de la notation
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

	PRIMARY KEY (service_id, user_id),  -- Clé primaire composée de service_id et user_id
    FOREIGN KEY (service_id) REFERENCES "local_service"(id) ON DELETE CASCADE,  -- Clé étrangère vers LOCAL_SERVICE(id), suppression en cascade
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE  -- Clé étrangère vers USER(id), suppression en cascade
);

-- COMMUNICATION

-- Création de la table CONVERSATION
DROP TABLE IF EXISTS "conversation";
CREATE TABLE IF NOT EXISTS "conversation" (  
	id SERIAL PRIMARY KEY,     -- Identifiant unique pour chaque conversation, clé primaire
	type VARCHAR(255),         -- Type de la conversation, chaîne de caractères de longueur maximale 255
	creation_date TIMESTAMP,   -- Date de création de la conversation, type de données datetime
	title VARCHAR(255),         -- Titre de la conversation, chaîne de caractères de longueur maximale 255
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "conversation_participant";
CREATE TABLE IF NOT EXISTS "conversation_participant" (
	conversation_id INT NOT NULL,  -- Identifiant de la conversation, clé étrangère vers CONVERSATION(id)
	user_id INT NOT NULL,  -- Identifiant de l'utilisateur, clé étrangère vers USER(id)
	date_added TIMESTAMPTZ,  -- Date d'ajout du participant, avec un horodatage au format UTC
	administrator BOOLEAN,  -- Indique si l'utilisateur est un administrateur de la conversation
	last_access TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Dernière date d'accès du participant à la conversation
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP,
	
	PRIMARY KEY (conversation_id, user_id),  -- Clé primaire composée des deux colonnes
	FOREIGN KEY (conversation_id) REFERENCES "conversation"(id) ON DELETE CASCADE,  -- Clé étrangère vers CONVERSATION(id), suppression en cascade
	FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE  -- Clé étrangère vers USER(id), suppression en cascade
);

 -- Création de la table MESSAGE
 DROP TABLE IF EXISTS "message";
CREATE TABLE IF NOT EXISTS "message" ( 
    id SERIAL PRIMARY KEY,  -- Identifiant unique, clé primaire
    conversation_id INT REFERENCES "conversation"(id),  -- Référence à la table CONVERSATION
    sender_id INT REFERENCES "user"(id),  -- Référence à la table USER
    content TEXT,  -- Contenu du message
    send_date TIMESTAMP,  -- Date et heure d'envoi du message
    type VARCHAR(50),  -- Type du message (ex. texte, image, etc.)
    read BOOLEAN,  -- Indique si le message a été lu
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

-- Création de la table VIDEO_CALL
DROP TABLE IF EXISTS "video_call";
CREATE TABLE IF NOT EXISTS "video_call" (  
    id SERIAL PRIMARY KEY,  -- Identifiant unique, clé primaire
    conversation_id INT REFERENCES "conversation"(id),  -- Référence à la table CONVERSATION
    initiator_id INT REFERENCES "user"(id),  -- Référence à la table USER pour l'initiateur
    start_date TIMESTAMP,  -- Date et heure de début de l'appel vidéo
    end_date TIMESTAMP,  -- Date et heure de fin de l'appel vidéo
    status VARCHAR(50),  -- Statut de l'appel vidéo (en cours, terminé, annulé, etc.)
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

-- PROJETS COLLABORATIFS

-- Création de la table COLLABORATIVE_PROJECT
DROP TABLE IF EXISTS "collaborative_project";
CREATE TABLE IF NOT EXISTS "collaborative_project" (
    id SERIAL PRIMARY KEY,                    -- id : identifiant unique du projet, clé primaire
    title VARCHAR(255),                       -- title : titre du projet
    description TEXT,                         -- description : description détaillée du projet
    creator_id INT REFERENCES "user"(id),      -- creator_id : identifiant de l'utilisateur créateur, clé étrangère vers USER
    creation_date TIMESTAMP,                  -- creation_date : date et heure de la création du projet
    status VARCHAR(50),                       -- status : statut actuel du projet
    category VARCHAR(100),                     -- category : catégorie du projet
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  "updated_at" TIMESTAMP
);

-- Création de la table PROJECT_MEMBER
DROP TABLE IF EXISTS "project_member";
CREATE TABLE IF NOT EXISTS "project_member" (
    project_id INT REFERENCES "collaborative_project"(id), -- project_id : identifiant du projet, clé étrangère vers COLLABORATIVE_PROJECT
    user_id INT REFERENCES "user"(id),                    -- user_id : identifiant de l'utilisateur, clé étrangère vers USER
    role VARCHAR(100),                                   -- role : rôle de l'utilisateur dans le projet
    join_date TIMESTAMP,                                 -- join_date : date et heure de l'adhésion au projet
  	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	"updated_at" TIMESTAMP,	

    PRIMARY KEY (project_id, user_id)                    -- PRIMARY KEY (project_id, user_id) : clé primaire composite
);

-- Création de la table PROJECT_TASK
DROP TABLE IF EXISTS "project_task";
CREATE TABLE IF NOT EXISTS "project_task" (
    id SERIAL PRIMARY KEY,                    -- id : identifiant unique de la tâche, clé primaire
    project_id INT REFERENCES "collaborative_project"(id), -- project_id : identifiant du projet auquel la tâche appartient
    title VARCHAR(255),                       -- title : titre de la tâche
    description TEXT,                         -- description : description détaillée de la tâche
    creation_date TIMESTAMP,                  -- creation_date : date et heure de la création de la tâche
    due_date TIMESTAMP,                       -- due_date : date limite pour la tâche
    status VARCHAR(50),                       -- status : statut actuel de la tâche
    assignee_id INT REFERENCES "user"(id),       -- assignee_id : identifiant de l'utilisateur assigné à la tâche, clé étrangère vers USER
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	"updated_at" TIMESTAMP
);

-- SERVICES MUNICIPAUX
DROP TABLE IF EXISTS "municipal_event";
CREATE TABLE IF NOT EXISTS "municipal_event" (  -- Création de la table municipal_event
	id SERIAL PRIMARY KEY,  -- Identifiant unique, clé primaire
	title VARCHAR(255) NOT NULL,  -- Titre de l'événement, ne peut pas être nul
	description TEXT,  -- Description de l'événement
	start_date TIMESTAMP NOT NULL,  -- Date et heure de début, ne peut pas être nul
	end_date TIMESTAMP NOT NULL,  -- Date et heure de fin, ne peut pas être nul
	location VARCHAR(255),  -- Lieu de l'événement
	gps_coordinates POINT,  -- Coordonnées GPS sous forme de point géographique
	organizer VARCHAR(255),  -- Organisateur de l'événement
	contact VARCHAR(255),  -- Contact pour l'événement
	official_link VARCHAR(255),  -- Lien officiel de l'événement
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

DROP TABLE IF EXISTS "urban_issue_report";
CREATE TABLE IF NOT EXISTS "urban_issue_report" (  -- Création de la table urban_issue_report
	id SERIAL PRIMARY KEY,  -- Identifiant unique, clé primaire
	user_id INT REFERENCES "user"(id),  -- Clé étrangère vers la table USER, fait référence à USER(id)
	category VARCHAR(255) NOT NULL,  -- Catégorie du problème urbain, ne peut pas être nul
	description TEXT,  -- Description du problème
	address VARCHAR(255),  -- Adresse où le problème est situé
	gps_coordinates POINT,  -- Coordonnées GPS sous forme de point géographique
	report_date TIMESTAMP NOT NULL,  -- Date du rapport, ne peut pas être nul
	status VARCHAR(255),  -- Statut du rapport (par exemple, "En cours", "Résolu", etc.)
	city_reference VARCHAR(255),  -- Référence de la ville (peut-être un code ou un nom)
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

-- STATISTIQUES ET BADGES

DROP TABLE IF EXISTS "user_statistics";  -- Suppression de la table user_statistics si elle existe
CREATE TABLE IF NOT EXISTS "user_statistics" (  -- Début de la création de la table user_statistics
	user_id INT PRIMARY KEY,  -- Identifiant de l'utilisateur, clé primaire
	services_provided INT,  -- Nombre de services fournis
	services_received INT,  -- Nombre de services reçus
	activities_participated INT,  -- Nombre d'activités auxquelles l'utilisateur a participé
	activities_organized INT,  -- Nombre d'activités organisées par l'utilisateur
	forum_messages INT,  -- Nombre de messages dans le forum
	total_help_points INT,  -- Points d'aide totaux accumulés par l'utilisateur
	network_size INT,  -- Taille du réseau de l'utilisateur
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP,
	
	FOREIGN KEY (user_id) REFERENCES "user"(id)  -- Clé étrangère vers la table USER (assume qu'une table USER existe avec une colonne id)
);  -- Fin de la table user_statistics

DROP TABLE IF EXISTS "badge";  -- Suppression de la table badge si elle existe
CREATE TABLE IF NOT EXISTS "badge" (  -- Début de la création de la table badge
	id INT PRIMARY KEY,  -- Identifiant du badge, clé primaire
	name VARCHAR(255),  -- Nom du badge
	description VARCHAR(255),  -- Description du badge
	icon VARCHAR(255),  -- Icône du badge
	category VARCHAR(255),  -- Catégorie du badge
	level INT,  -- Niveau du badge
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP

);  -- Fin de la table badge

DROP TABLE IF EXISTS "user_badge";  -- Suppression de la table user_badge si elle existe
CREATE TABLE IF NOT EXISTS "user_badge" (  -- Début de la création de la table user_badge
	user_id INT,  -- Identifiant de l'utilisateur, clé étrangère
	badge_id INT,  -- Identifiant du badge, clé étrangère
	achievement_date TIMESTAMP,  -- Date d'obtention du badge
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP,
	
	PRIMARY KEY (user_id, badge_id),  -- Clé primaire composite basée sur l'utilisateur et le badge
	FOREIGN KEY (user_id) REFERENCES "user"(id),  -- Clé étrangère vers la table USER
	FOREIGN KEY (badge_id) REFERENCES "badge"(id)  -- Clé étrangère vers la table BADGE
);  -- Fin de la table user_badge

-- DONNÉES HORS LIGNE ET JOURNALISATION

-- Création de la table OFFLINE_USER
DROP TABLE IF EXISTS "offline_user";
CREATE TABLE IF NOT EXISTS "offline_user" (
    user_id INT PRIMARY KEY, -- Définition de la clé primaire sur user_id
    cached_data JSON, -- Stocke les données mises en cache au format JSON
    last_sync TIMESTAMP, -- Date et heure de la dernière synchronisation
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

-- Création de la table ACTIVITY_LOG
DROP TABLE IF EXISTS "activity_log";  
CREATE TABLE IF NOT EXISTS "activity_log" (
    id INT PRIMARY KEY, -- Définition de la clé primaire sur id
    user_id INT, -- L'ID de l'utilisateur (clé étrangère)
    action_type VARCHAR, -- Type d'action effectuée par l'utilisateur
    description TEXT, -- Description détaillée de l'action
    action_date TIMESTAMP, -- Date et heure de l'action
    ip_address VARCHAR, -- Adresse IP de l'utilisateur
    device VARCHAR, -- Nom du dispositif utilisé par l'utilisateur
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP,
	
	FOREIGN KEY (user_id) REFERENCES "user"(id) -- Définition de la clé étrangère liant user_id à la table USER
);

-- Création de la table USER_DEVICE
DROP TABLE IF EXISTS "user_device";
CREATE TABLE IF NOT EXISTS "user_device" (
    id INT PRIMARY KEY, -- Définition de la clé primaire sur id
    user_id INT, -- L'ID de l'utilisateur (clé étrangère)
    device_type VARCHAR, -- Type de dispositif (ex: smartphone, tablette)
    device_name VARCHAR, -- Nom du dispositif
    operating_system VARCHAR, -- Système d'exploitation du dispositif
    notification_token VARCHAR, -- Jeton de notification pour le dispositif
    last_connection TIMESTAMP, -- Date et heure de la dernière connexion
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP,
	
	FOREIGN KEY (user_id) REFERENCES "user"(id) -- Définition de la clé étrangère liant user_id à la table USER
);

-- ENQUÊTES DE SATISFACTION

-- Création de la table SATISFACTION_SURVEY
DROP TABLE IF EXISTS "satisfaction_survey";
CREATE TABLE IF NOT EXISTS "satisfaction_survey" (
    id SERIAL PRIMARY KEY,  -- Identifiant unique de l'enquête (clé primaire)
    title VARCHAR(255) NOT NULL,  -- Titre de l'enquête
    description TEXT,  -- Description de l'enquête
    start_date TIMESTAMP,  -- Date et heure de début de l'enquête
    end_date TIMESTAMP,  -- Date et heure de fin de l'enquête
    active BOOLEAN DEFAULT TRUE,  -- Statut de l'enquête (active ou non), avec valeur par défaut TRUE
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP
);

-- Création de la table SURVEY_RESPONSE
DROP TABLE IF EXISTS "survey_response";
CREATE TABLE IF NOT EXISTS "survey_response" (
  survey_id INT NOT NULL,  -- Référence à l'enquête (clé étrangère vers SATISFACTION_SURVEY)
  user_id INT NOT NULL,  -- Référence à l'utilisateur (clé étrangère vers USER)
  responses JSONB,  -- Réponses de l'utilisateur au format JSON
  response_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Date et heure de la réponse, valeur par défaut : maintenant
 	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" TIMESTAMP,
 
 	PRIMARY KEY (survey_id, user_id),  -- Clé primaire composée de survey_id et user_id
    FOREIGN KEY (survey_id) REFERENCES "satisfaction_survey"(id) ON DELETE CASCADE,  -- Clé étrangère vers SATISFACTION_SURVEY avec suppression en cascade
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE  -- Clé étrangère vers USER avec suppression en cascade
);

COMMIT;