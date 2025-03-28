export type TCard = {
      _id: number;
      senderName: string;
      message: string;
      image: string;
};

export type TGift = {
      _id: string;
      uniqueId: string;
      userId: string;
      category: string;
      image: string;
      price: number;
      status: string;
      paymentStatus: string;
      pages: any[]; // Define a specific type if needed
      createdAt: string;
      updatedAt: string;
      coverPage: {
            recipientName: string;
            title: string;
            senderName: string;
      };
};
    
export type TProfile = {
      _id: string;
      name: string;
      role: 'USER' | 'ADMIN';
      email: string;
      profile: string;
      status: string;
      verified: boolean;
      createdAt: string;
      updatedAt: string;
      contact: string;
};