import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // message text
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    //  find or create conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // create a new Message document
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    //  save the message to the database
    await newMessage.save();

    //  link the message to the conversation
    conversation.messages.push(newMessage._id);
    await conversation.save();

    //  send back the saved message
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getMessage = async (req,res)=>{
  try {
    
    const {id:userToChatId}= req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants:{$all:[senderId, userToChatId]}
    }).populate("messages") // not reference but actul message

    if(!conversation){
      return res.status(200).json([]);
    }
    
    const message = conversation.messages

    res.status(200).json(messages);

  } catch (error) {
    console.log("Error in getMessage controller", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
}