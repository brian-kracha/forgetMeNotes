# forgetMeNotes
--ROUTES--

LANDING: Login / About Us(Parallax with GIF or Preview)
  1. Use Cases Scrolling.
  2. Gif of website or Iframe Preview.
  3. Log in fields top.
  4. Sign up page button.
SIGNUP: Username, email, DoB, gender, Security.
  1. Required fields.
  2. Recovery Question.
  3. I am not a robot.
  4. Routes to profile if successful
PROFILE: Photo, About, Pinned, Recent, Settings.
  1. Update your photo.
  2. Update your About Me.
  3. Add / Remove pinned items.
  4. Hide your recent notes.
  5. Settings page button.
MAINBOARD: Categories, Notes inside, New Category, New Note.
  1. Add new category.
  2. Sort categories.
  3. Add new note.
  4. Sort notes.
  5. Set note priority and time schedule.
  6. Time expiring soon.
  7. Set note as pinned item.
ROUTES:
  1. '/' GET "Landing Page"
  2. '/SignIn' POST "Sign in request"
  3. '/SignUp' POST "New user request"
  4. '/DashBoard' GET "Shows all categories and notes"
  5. '/n/note' POST "Add new note to user"
  6. '/n/category' POST "Add new category to user"
  7. '/e/note' GET "Gets note from user"
  8. '/e/category' GET "Gets category from user"
  9. '/e/comments' GET "Gets comments on a note"
  10. '/e/category/notes' GET "Gets all notes for a category for a user"
  11. '/e/categories' GET "Gets all categories for a user."
  12. '/profile' GET "Gets users profile page"
        SIGNIN
UUID|PASSWORD|SALT|EMAIL
        NOTES
NOTEID|UUID|NOTES|TITLE|CATEGORY|PRIORITY|REMINDER|RATING|PUBLIC
        CATEGORY
UUID|CATID|CATNAME|PUBLIC
        USERS
UUID|USERNAME|EMAIL|FRIENDS
        COMMENTS
ID|NOTEID|UUID|MSG|UP|DOWN



--WAFFLE BOARD--
https://waffle.io/brian-kracha/forgetMeNotes


--  SCHEMA--
https://gstudents.slack.com/files/U726PFPGU/F8BCQT76D/screen_shot_2017-12-07_at_4.23.57_pm.png

--Style Guide--


MATERIALIZE WIREFRAME--
For accessing categories-- materialize carousel
For accessing notes -- materialize Collapsible
For Notifications -- materialize toast
For page setup -- Materialize Parallax
For Add-note Button -- materialize waves

Color Scheme
/* Coolors Exported Palette - coolors.co/1b1725-534b62-a499b3-a1cdf4-e8ebe4 */

/* HSL */
$color1: hsla(257%, 23%, 12%, 1);
$color2: hsla(261%, 13%, 34%, 1);
$color3: hsla(265%, 15%, 65%, 1);
$color4: hsla(208%, 79%, 79%, 1);
$color5: hsla(86%, 15%, 91%, 1);

/* RGB */
$color1: rgba(27, 23, 37, 1);
$color2: rgba(83, 75, 98, 1);
$color3: rgba(164, 153, 179, 1);
$color4: rgba(161, 205, 244, 1);
$color5: rgba(232, 235, 228, 1);

color scheme 2
/* Coolors Exported Palette - coolors.co/46aae1-000807-3a606e-efefef-d3ab9e */

/* HSL */
$color1: hsla(201%, 72%, 58%, 1);
$color2: hsla(173%, 100%, 2%, 1);
$color3: hsla(196%, 31%, 33%, 1);
$color4: hsla(0%, 0%, 94%, 1);
$color5: hsla(15%, 38%, 72%, 1);

/* RGB */
$color1: rgba(70, 170, 225, 1);
$color2: rgba(0, 8, 7, 1);
$color3: rgba(58, 96, 110, 1);
$color4: rgba(239, 239, 239, 1);
$color5: rgba(211, 171, 158, 1);

COLOR SCHEME 3
/* Coolors Exported Palette - coolors.co/1b264f-274690-ffa630-576ca8-f5f3f5 */

/* HSL */
$color1: hsla(227%, 49%, 21%, 1);
$color2: hsla(222%, 57%, 36%, 1);
$color3: hsla(34%, 100%, 59%, 1);
$color4: hsla(224%, 32%, 50%, 1);
$color5: hsla(300%, 9%, 96%, 1);

/* RGB */
$color1: rgba(27, 38, 79, 1);
$color2: rgba(39, 70, 144, 1);
$color3: rgba(255, 166, 48, 1);
$color4: rgba(87, 108, 168, 1);
$color5: rgba(245, 243, 245, 1);
