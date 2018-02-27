# Overview
Tasker is a platform designed to streamline task management between different 
teams.

Members can create tasks and assign them to other members or groups of members.

Tasker will provide a quick view of different tasks assigned to each member as 
well as any teams that member is in.

## Member Structure
Member < Group < Team <<< Organisation

### Members
A member represents a single user  
A Member belongs to one Organisation  
Members can be assigned to groups   
Members can be assigned to teams   
Members can be in multiple groups/teams   

### Groups
Groups are collections of Members   
Groups can be assigned to teams   
Groups can have multiple teams

### Teams 
Teams are collections of Groups and Members   
Teams can have leaders - selected from one of the members in the team or from within a group   
Teams can have multiple leaders

### Organisation
The collection of all Members Groups and Teams    
Created and maintained by Default   
Has Admins that can add Members

### Leaders 
Have more control than regular members

@todo

## Tasks

### Task Spec
A Task has: 
* Status: Open / Waiting / Closed
* Title
* Description (optional)
* Urgency (optional)
* Assignation: Unassigned/Members/Groups/Teams (or a combination of)
* Schedule (optional)

Members can assign themselves to Tasks assigned to a Group or Team they are part of

A Team leader can assign other members to tasks assigned to the Team

## Views
The different pages a user will be able to view

### Member view
Displays lists of open tasks assigned to:
* Member
* groups / teams the member is part of

Ability to order tasks by: 
* urgency
* team / group / individual
* date created

List can be filtered by:
* Status: Open / Waiting / Closed
* Group / Team
* Urgency

### Teams/Groups Overview
Displays Teams/Groups the Member belongs to   
Can create new Groups / Teams

### Team/Group view
Can View Members/Groups    
Can view Tasks

### Task Creator
Should be accessible from most other views    
Input boxes for all fields    
Should this be it's own view or just a pop-up from another view?

