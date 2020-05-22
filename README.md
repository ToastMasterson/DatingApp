This is an app built following instructions by Neil Cummings through his Udemy course on ASP.NET and Angular.

This version is in netcore3.0 and angular9.

The live site is here: https://tcmdatingapp.azurewebsites.net/

Self-implemented photo management system based on lessons within Neil's course.

You can fork/clone this whole repository and follow these instructions.

Inside the .API folder, delete the Migrations folder entirely.
Establish an appsettings.json file to arrange your DB connection of choice.

run (from inside .API)
dotnet ef migrations add InitialCreate 
dotnet ef database update

then dotnet run watch (for development)

From inside the -SPA folder run:
npm i
npm u
ng serve

go to the localhost site provided and register a new user or login with one of the seeded users.
Site should redirect you to a matches page where you may select another user, and filter the list of users to your specifications.
You may message, "like", or simply view a user's public details.
You can update your user information and upload photos for approval.
Admins and Moderators can approve/reject user uploaded photos.
Admins can update user roles.

Admin login:
admin
Password

Technologies used:
OAuth,
Bootstrap,
EntityFramework,
Cloudinary