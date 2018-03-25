# Overview
Tasker is a platform designed to streamline task management between different 
Teams.

Members can create tasks and assign them to other members or Groups of members.

Tasker will provide a quick view of different tasks assigned to each member as 
well as any Teams that member is in.

## Member Structure
Member < Group < Team <<< Organisation

### Members
A member represents a single user  
A Member belongs to one Organisation  
Members can be assigned to Groups   
Members can be assigned to Teams   
Members can be in multiple Groups/Teams   

### Groups
Groups are collections of Members   
Groups can be assigned to Teams   
Groups can have multiple Teams

### Teams 
Teams are collections of Groups and Members   
Teams can have leaders - selected from one of the members in the Team or from within a Group   
Teams can have multiple leaders

### Organisation
The collection of all Members Groups and Teams    
Created and maintained by Default   
Has Admins that can add Members

### Leaders 
Have more control than regular members

@todo

## Tasks
When Tasks are assigned to a Member/Group/Team all sub-members are notified

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

### Task Feed
Displays lists of open tasks assigned to:
* Member
* Groups / Teams the member is part of

Ability to order tasks by: 
* urgency
* Team / Group / individual
* date created

List can be filtered by:
* Status: Open / Waiting / Closed
* Group / Team
* Urgency

### Group Management
Displays Teams/Groups the Member belongs to   
Can create new Groups / Teams
Can focus into a Team/Group to open a niew View:

#### Team/Group view
Can View Members/Groups    
Can view Tasks

### Task Creator
Should be accessible from most other views    
Input boxes for all fields    
Should this be it's own view or just a pop-up from another view?

