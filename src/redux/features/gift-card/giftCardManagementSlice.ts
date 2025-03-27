import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type GiftCardManagementState = {
      title: string | null;
      bgImage: string;
      recipientName: string | null;
      senderName: string | null;
      boardFormat: string;
      occasionType: string;
};

type UpdateFieldPayload = {
      field: keyof GiftCardManagementState;
      value: string;
};

const initialState: GiftCardManagementState = {
      title: null,
      recipientName: null,
      senderName: null,
      boardFormat: 'card',
      bgImage: '',
      occasionType: 'Birthday',
};

const giftCardManagementSlice = createSlice({
      name: 'giftCardManagement',
      initialState,
      reducers: {
            updateField: (state, action: PayloadAction<UpdateFieldPayload>) => {
                  const { field, value } = action.payload;
                  state[field] = value;
            },
      },
});

export const { updateField } = giftCardManagementSlice.actions;

export default giftCardManagementSlice.reducer;
