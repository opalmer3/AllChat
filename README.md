# Project 2 - All Chat - An Online messaging service

"/" - Index page - User is prompted to enter a display name with this being stored in local storage. After they have entered a display name they can start new conversations and view/participate in existing ones. If a user tries to access a conversation before having a display name they are directed back to the homepage. Conversations are displayed in order of which were last active.

"newchannel" - New channel page - Contains a simple form allowing users to create a new conversation topic. After Channel creation users are automatically directed to the channel page.

"channel/<int: channel_id>" - Channel page - A title section shows who created the conversation and when. When a message is sent the message is emitted to the server using socket.IO commited to the database and emitted to all users if succesful allowing for a real time messaging experience. Messages sent by the user are shown on the right of the conversation window whereas messages sent by others are displayed on the left in a different format. If the user decides they want to delete or recall their message they can right click it and a custom right click menu is displayed. If they choose to delete their message it will be changed in the database and all users will see that a message was deleted. If a user wishes to recall a message they must do so within 1 minute of sending, after 1 minute the recall option disappears. On recall all users will see that a message has been recalled and the message will appear in the send message box of the user so they can edit it if they wish.

If a message could not be sent (due to database or socket.io issue) they will receive an error message. Only a maximum of 100 messages per conversation are stored in the database, the oldest messages will be deleted if the number of messages exceeds 100.