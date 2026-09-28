import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WhatsAppConversationModel = runtime.Types.Result.DefaultSelection<Prisma.$WhatsAppConversationPayload>;
export type AggregateWhatsAppConversation = {
    _count: WhatsAppConversationCountAggregateOutputType | null;
    _avg: WhatsAppConversationAvgAggregateOutputType | null;
    _sum: WhatsAppConversationSumAggregateOutputType | null;
    _min: WhatsAppConversationMinAggregateOutputType | null;
    _max: WhatsAppConversationMaxAggregateOutputType | null;
};
export type WhatsAppConversationAvgAggregateOutputType = {
    unreadCount: number | null;
};
export type WhatsAppConversationSumAggregateOutputType = {
    unreadCount: number | null;
};
export type WhatsAppConversationMinAggregateOutputType = {
    id: string | null;
    channelIdentityId: string | null;
    phoneNumberId: string | null;
    status: string | null;
    lastMessageAt: Date | null;
    lastMessagePreview: string | null;
    unreadCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WhatsAppConversationMaxAggregateOutputType = {
    id: string | null;
    channelIdentityId: string | null;
    phoneNumberId: string | null;
    status: string | null;
    lastMessageAt: Date | null;
    lastMessagePreview: string | null;
    unreadCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WhatsAppConversationCountAggregateOutputType = {
    id: number;
    channelIdentityId: number;
    phoneNumberId: number;
    status: number;
    lastMessageAt: number;
    lastMessagePreview: number;
    unreadCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WhatsAppConversationAvgAggregateInputType = {
    unreadCount?: true;
};
export type WhatsAppConversationSumAggregateInputType = {
    unreadCount?: true;
};
export type WhatsAppConversationMinAggregateInputType = {
    id?: true;
    channelIdentityId?: true;
    phoneNumberId?: true;
    status?: true;
    lastMessageAt?: true;
    lastMessagePreview?: true;
    unreadCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WhatsAppConversationMaxAggregateInputType = {
    id?: true;
    channelIdentityId?: true;
    phoneNumberId?: true;
    status?: true;
    lastMessageAt?: true;
    lastMessagePreview?: true;
    unreadCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WhatsAppConversationCountAggregateInputType = {
    id?: true;
    channelIdentityId?: true;
    phoneNumberId?: true;
    status?: true;
    lastMessageAt?: true;
    lastMessagePreview?: true;
    unreadCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WhatsAppConversationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppConversationWhereInput;
    orderBy?: Prisma.WhatsAppConversationOrderByWithRelationInput | Prisma.WhatsAppConversationOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WhatsAppConversationCountAggregateInputType;
    _avg?: WhatsAppConversationAvgAggregateInputType;
    _sum?: WhatsAppConversationSumAggregateInputType;
    _min?: WhatsAppConversationMinAggregateInputType;
    _max?: WhatsAppConversationMaxAggregateInputType;
};
export type GetWhatsAppConversationAggregateType<T extends WhatsAppConversationAggregateArgs> = {
    [P in keyof T & keyof AggregateWhatsAppConversation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWhatsAppConversation[P]> : Prisma.GetScalarType<T[P], AggregateWhatsAppConversation[P]>;
};
export type WhatsAppConversationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppConversationWhereInput;
    orderBy?: Prisma.WhatsAppConversationOrderByWithAggregationInput | Prisma.WhatsAppConversationOrderByWithAggregationInput[];
    by: Prisma.WhatsAppConversationScalarFieldEnum[] | Prisma.WhatsAppConversationScalarFieldEnum;
    having?: Prisma.WhatsAppConversationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WhatsAppConversationCountAggregateInputType | true;
    _avg?: WhatsAppConversationAvgAggregateInputType;
    _sum?: WhatsAppConversationSumAggregateInputType;
    _min?: WhatsAppConversationMinAggregateInputType;
    _max?: WhatsAppConversationMaxAggregateInputType;
};
export type WhatsAppConversationGroupByOutputType = {
    id: string;
    channelIdentityId: string;
    phoneNumberId: string;
    status: string;
    lastMessageAt: Date | null;
    lastMessagePreview: string | null;
    unreadCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: WhatsAppConversationCountAggregateOutputType | null;
    _avg: WhatsAppConversationAvgAggregateOutputType | null;
    _sum: WhatsAppConversationSumAggregateOutputType | null;
    _min: WhatsAppConversationMinAggregateOutputType | null;
    _max: WhatsAppConversationMaxAggregateOutputType | null;
};
export type GetWhatsAppConversationGroupByPayload<T extends WhatsAppConversationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WhatsAppConversationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WhatsAppConversationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WhatsAppConversationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WhatsAppConversationGroupByOutputType[P]>;
}>>;
export type WhatsAppConversationWhereInput = {
    AND?: Prisma.WhatsAppConversationWhereInput | Prisma.WhatsAppConversationWhereInput[];
    OR?: Prisma.WhatsAppConversationWhereInput[];
    NOT?: Prisma.WhatsAppConversationWhereInput | Prisma.WhatsAppConversationWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    channelIdentityId?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    phoneNumberId?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    status?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"WhatsAppConversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableFilter<"WhatsAppConversation"> | string | null;
    unreadCount?: Prisma.IntFilter<"WhatsAppConversation"> | number;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppConversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppConversation"> | Date | string;
    channelIdentity?: Prisma.XOR<Prisma.WhatsAppChannelIdentityScalarRelationFilter, Prisma.WhatsAppChannelIdentityWhereInput>;
    messages?: Prisma.WhatsAppMessageListRelationFilter;
};
export type WhatsAppConversationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    channelIdentityId?: Prisma.SortOrder;
    phoneNumberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrderInput | Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    channelIdentity?: Prisma.WhatsAppChannelIdentityOrderByWithRelationInput;
    messages?: Prisma.WhatsAppMessageOrderByRelationAggregateInput;
};
export type WhatsAppConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    channelIdentityId_phoneNumberId?: Prisma.WhatsAppConversationChannelIdentityIdPhoneNumberIdCompoundUniqueInput;
    AND?: Prisma.WhatsAppConversationWhereInput | Prisma.WhatsAppConversationWhereInput[];
    OR?: Prisma.WhatsAppConversationWhereInput[];
    NOT?: Prisma.WhatsAppConversationWhereInput | Prisma.WhatsAppConversationWhereInput[];
    channelIdentityId?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    phoneNumberId?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    status?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"WhatsAppConversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableFilter<"WhatsAppConversation"> | string | null;
    unreadCount?: Prisma.IntFilter<"WhatsAppConversation"> | number;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppConversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppConversation"> | Date | string;
    channelIdentity?: Prisma.XOR<Prisma.WhatsAppChannelIdentityScalarRelationFilter, Prisma.WhatsAppChannelIdentityWhereInput>;
    messages?: Prisma.WhatsAppMessageListRelationFilter;
}, "id" | "channelIdentityId_phoneNumberId">;
export type WhatsAppConversationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    channelIdentityId?: Prisma.SortOrder;
    phoneNumberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrderInput | Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WhatsAppConversationCountOrderByAggregateInput;
    _avg?: Prisma.WhatsAppConversationAvgOrderByAggregateInput;
    _max?: Prisma.WhatsAppConversationMaxOrderByAggregateInput;
    _min?: Prisma.WhatsAppConversationMinOrderByAggregateInput;
    _sum?: Prisma.WhatsAppConversationSumOrderByAggregateInput;
};
export type WhatsAppConversationScalarWhereWithAggregatesInput = {
    AND?: Prisma.WhatsAppConversationScalarWhereWithAggregatesInput | Prisma.WhatsAppConversationScalarWhereWithAggregatesInput[];
    OR?: Prisma.WhatsAppConversationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WhatsAppConversationScalarWhereWithAggregatesInput | Prisma.WhatsAppConversationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WhatsAppConversation"> | string;
    channelIdentityId?: Prisma.StringWithAggregatesFilter<"WhatsAppConversation"> | string;
    phoneNumberId?: Prisma.StringWithAggregatesFilter<"WhatsAppConversation"> | string;
    status?: Prisma.StringWithAggregatesFilter<"WhatsAppConversation"> | string;
    lastMessageAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WhatsAppConversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppConversation"> | string | null;
    unreadCount?: Prisma.IntWithAggregatesFilter<"WhatsAppConversation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppConversation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppConversation"> | Date | string;
};
export type WhatsAppConversationCreateInput = {
    id?: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channelIdentity: Prisma.WhatsAppChannelIdentityCreateNestedOneWithoutConversationsInput;
    messages?: Prisma.WhatsAppMessageCreateNestedManyWithoutConversationInput;
};
export type WhatsAppConversationUncheckedCreateInput = {
    id?: string;
    channelIdentityId: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type WhatsAppConversationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channelIdentity?: Prisma.WhatsAppChannelIdentityUpdateOneRequiredWithoutConversationsNestedInput;
    messages?: Prisma.WhatsAppMessageUpdateManyWithoutConversationNestedInput;
};
export type WhatsAppConversationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channelIdentityId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type WhatsAppConversationCreateManyInput = {
    id?: string;
    channelIdentityId: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppConversationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppConversationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channelIdentityId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppConversationListRelationFilter = {
    every?: Prisma.WhatsAppConversationWhereInput;
    some?: Prisma.WhatsAppConversationWhereInput;
    none?: Prisma.WhatsAppConversationWhereInput;
};
export type WhatsAppConversationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WhatsAppConversationChannelIdentityIdPhoneNumberIdCompoundUniqueInput = {
    channelIdentityId: string;
    phoneNumberId: string;
};
export type WhatsAppConversationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    channelIdentityId?: Prisma.SortOrder;
    phoneNumberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppConversationAvgOrderByAggregateInput = {
    unreadCount?: Prisma.SortOrder;
};
export type WhatsAppConversationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    channelIdentityId?: Prisma.SortOrder;
    phoneNumberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppConversationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    channelIdentityId?: Prisma.SortOrder;
    phoneNumberId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppConversationSumOrderByAggregateInput = {
    unreadCount?: Prisma.SortOrder;
};
export type WhatsAppConversationNullableScalarRelationFilter = {
    is?: Prisma.WhatsAppConversationWhereInput | null;
    isNot?: Prisma.WhatsAppConversationWhereInput | null;
};
export type WhatsAppConversationCreateNestedManyWithoutChannelIdentityInput = {
    create?: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput> | Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput[] | Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput[];
    connectOrCreate?: Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput | Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput[];
    createMany?: Prisma.WhatsAppConversationCreateManyChannelIdentityInputEnvelope;
    connect?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
};
export type WhatsAppConversationUncheckedCreateNestedManyWithoutChannelIdentityInput = {
    create?: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput> | Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput[] | Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput[];
    connectOrCreate?: Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput | Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput[];
    createMany?: Prisma.WhatsAppConversationCreateManyChannelIdentityInputEnvelope;
    connect?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
};
export type WhatsAppConversationUpdateManyWithoutChannelIdentityNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput> | Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput[] | Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput[];
    connectOrCreate?: Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput | Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput[];
    upsert?: Prisma.WhatsAppConversationUpsertWithWhereUniqueWithoutChannelIdentityInput | Prisma.WhatsAppConversationUpsertWithWhereUniqueWithoutChannelIdentityInput[];
    createMany?: Prisma.WhatsAppConversationCreateManyChannelIdentityInputEnvelope;
    set?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    disconnect?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    delete?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    connect?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    update?: Prisma.WhatsAppConversationUpdateWithWhereUniqueWithoutChannelIdentityInput | Prisma.WhatsAppConversationUpdateWithWhereUniqueWithoutChannelIdentityInput[];
    updateMany?: Prisma.WhatsAppConversationUpdateManyWithWhereWithoutChannelIdentityInput | Prisma.WhatsAppConversationUpdateManyWithWhereWithoutChannelIdentityInput[];
    deleteMany?: Prisma.WhatsAppConversationScalarWhereInput | Prisma.WhatsAppConversationScalarWhereInput[];
};
export type WhatsAppConversationUncheckedUpdateManyWithoutChannelIdentityNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput> | Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput[] | Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput[];
    connectOrCreate?: Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput | Prisma.WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput[];
    upsert?: Prisma.WhatsAppConversationUpsertWithWhereUniqueWithoutChannelIdentityInput | Prisma.WhatsAppConversationUpsertWithWhereUniqueWithoutChannelIdentityInput[];
    createMany?: Prisma.WhatsAppConversationCreateManyChannelIdentityInputEnvelope;
    set?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    disconnect?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    delete?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    connect?: Prisma.WhatsAppConversationWhereUniqueInput | Prisma.WhatsAppConversationWhereUniqueInput[];
    update?: Prisma.WhatsAppConversationUpdateWithWhereUniqueWithoutChannelIdentityInput | Prisma.WhatsAppConversationUpdateWithWhereUniqueWithoutChannelIdentityInput[];
    updateMany?: Prisma.WhatsAppConversationUpdateManyWithWhereWithoutChannelIdentityInput | Prisma.WhatsAppConversationUpdateManyWithWhereWithoutChannelIdentityInput[];
    deleteMany?: Prisma.WhatsAppConversationScalarWhereInput | Prisma.WhatsAppConversationScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type WhatsAppConversationCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutMessagesInput, Prisma.WhatsAppConversationUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.WhatsAppConversationCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.WhatsAppConversationWhereUniqueInput;
};
export type WhatsAppConversationUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutMessagesInput, Prisma.WhatsAppConversationUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.WhatsAppConversationCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.WhatsAppConversationUpsertWithoutMessagesInput;
    disconnect?: Prisma.WhatsAppConversationWhereInput | boolean;
    delete?: Prisma.WhatsAppConversationWhereInput | boolean;
    connect?: Prisma.WhatsAppConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WhatsAppConversationUpdateToOneWithWhereWithoutMessagesInput, Prisma.WhatsAppConversationUpdateWithoutMessagesInput>, Prisma.WhatsAppConversationUncheckedUpdateWithoutMessagesInput>;
};
export type WhatsAppConversationCreateWithoutChannelIdentityInput = {
    id?: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageCreateNestedManyWithoutConversationInput;
};
export type WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput = {
    id?: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type WhatsAppConversationCreateOrConnectWithoutChannelIdentityInput = {
    where: Prisma.WhatsAppConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput>;
};
export type WhatsAppConversationCreateManyChannelIdentityInputEnvelope = {
    data: Prisma.WhatsAppConversationCreateManyChannelIdentityInput | Prisma.WhatsAppConversationCreateManyChannelIdentityInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppConversationUpsertWithWhereUniqueWithoutChannelIdentityInput = {
    where: Prisma.WhatsAppConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.WhatsAppConversationUpdateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedUpdateWithoutChannelIdentityInput>;
    create: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedCreateWithoutChannelIdentityInput>;
};
export type WhatsAppConversationUpdateWithWhereUniqueWithoutChannelIdentityInput = {
    where: Prisma.WhatsAppConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.WhatsAppConversationUpdateWithoutChannelIdentityInput, Prisma.WhatsAppConversationUncheckedUpdateWithoutChannelIdentityInput>;
};
export type WhatsAppConversationUpdateManyWithWhereWithoutChannelIdentityInput = {
    where: Prisma.WhatsAppConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.WhatsAppConversationUpdateManyMutationInput, Prisma.WhatsAppConversationUncheckedUpdateManyWithoutChannelIdentityInput>;
};
export type WhatsAppConversationScalarWhereInput = {
    AND?: Prisma.WhatsAppConversationScalarWhereInput | Prisma.WhatsAppConversationScalarWhereInput[];
    OR?: Prisma.WhatsAppConversationScalarWhereInput[];
    NOT?: Prisma.WhatsAppConversationScalarWhereInput | Prisma.WhatsAppConversationScalarWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    channelIdentityId?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    phoneNumberId?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    status?: Prisma.StringFilter<"WhatsAppConversation"> | string;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"WhatsAppConversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableFilter<"WhatsAppConversation"> | string | null;
    unreadCount?: Prisma.IntFilter<"WhatsAppConversation"> | number;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppConversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppConversation"> | Date | string;
};
export type WhatsAppConversationCreateWithoutMessagesInput = {
    id?: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channelIdentity: Prisma.WhatsAppChannelIdentityCreateNestedOneWithoutConversationsInput;
};
export type WhatsAppConversationUncheckedCreateWithoutMessagesInput = {
    id?: string;
    channelIdentityId: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppConversationCreateOrConnectWithoutMessagesInput = {
    where: Prisma.WhatsAppConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutMessagesInput, Prisma.WhatsAppConversationUncheckedCreateWithoutMessagesInput>;
};
export type WhatsAppConversationUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.WhatsAppConversationUpdateWithoutMessagesInput, Prisma.WhatsAppConversationUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.WhatsAppConversationCreateWithoutMessagesInput, Prisma.WhatsAppConversationUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.WhatsAppConversationWhereInput;
};
export type WhatsAppConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.WhatsAppConversationWhereInput;
    data: Prisma.XOR<Prisma.WhatsAppConversationUpdateWithoutMessagesInput, Prisma.WhatsAppConversationUncheckedUpdateWithoutMessagesInput>;
};
export type WhatsAppConversationUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    channelIdentity?: Prisma.WhatsAppChannelIdentityUpdateOneRequiredWithoutConversationsNestedInput;
};
export type WhatsAppConversationUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channelIdentityId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppConversationCreateManyChannelIdentityInput = {
    id?: string;
    phoneNumberId: string;
    status?: string;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppConversationUpdateWithoutChannelIdentityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUpdateManyWithoutConversationNestedInput;
};
export type WhatsAppConversationUncheckedUpdateWithoutChannelIdentityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type WhatsAppConversationUncheckedUpdateManyWithoutChannelIdentityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumberId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppConversationCountOutputType = {
    messages: number;
};
export type WhatsAppConversationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | WhatsAppConversationCountOutputTypeCountMessagesArgs;
};
export type WhatsAppConversationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationCountOutputTypeSelect<ExtArgs> | null;
};
export type WhatsAppConversationCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppMessageWhereInput;
};
export type WhatsAppConversationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    channelIdentityId?: boolean;
    phoneNumberId?: boolean;
    status?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    unreadCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    channelIdentity?: boolean | Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.WhatsAppConversation$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.WhatsAppConversationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppConversation"]>;
export type WhatsAppConversationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    channelIdentityId?: boolean;
    phoneNumberId?: boolean;
    status?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    unreadCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    channelIdentity?: boolean | Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppConversation"]>;
export type WhatsAppConversationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    channelIdentityId?: boolean;
    phoneNumberId?: boolean;
    status?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    unreadCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    channelIdentity?: boolean | Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppConversation"]>;
export type WhatsAppConversationSelectScalar = {
    id?: boolean;
    channelIdentityId?: boolean;
    phoneNumberId?: boolean;
    status?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    unreadCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WhatsAppConversationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "channelIdentityId" | "phoneNumberId" | "status" | "lastMessageAt" | "lastMessagePreview" | "unreadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppConversation"]>;
export type WhatsAppConversationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    channelIdentity?: boolean | Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.WhatsAppConversation$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.WhatsAppConversationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WhatsAppConversationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    channelIdentity?: boolean | Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>;
};
export type WhatsAppConversationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    channelIdentity?: boolean | Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>;
};
export type $WhatsAppConversationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WhatsAppConversation";
    objects: {
        channelIdentity: Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>;
        messages: Prisma.$WhatsAppMessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        channelIdentityId: string;
        phoneNumberId: string;
        status: string;
        lastMessageAt: Date | null;
        lastMessagePreview: string | null;
        unreadCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["whatsAppConversation"]>;
    composites: {};
};
export type WhatsAppConversationGetPayload<S extends boolean | null | undefined | WhatsAppConversationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload, S>;
export type WhatsAppConversationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WhatsAppConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WhatsAppConversationCountAggregateInputType | true;
};
export interface WhatsAppConversationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppConversation'];
        meta: {
            name: 'WhatsAppConversation';
        };
    };
    findUnique<T extends WhatsAppConversationFindUniqueArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WhatsAppConversationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WhatsAppConversationFindFirstArgs>(args?: Prisma.SelectSubset<T, WhatsAppConversationFindFirstArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WhatsAppConversationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WhatsAppConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WhatsAppConversationFindManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WhatsAppConversationCreateArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationCreateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WhatsAppConversationCreateManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WhatsAppConversationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WhatsAppConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WhatsAppConversationDeleteArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationDeleteArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WhatsAppConversationUpdateArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationUpdateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WhatsAppConversationDeleteManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WhatsAppConversationUpdateManyArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WhatsAppConversationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WhatsAppConversationUpsertArgs>(args: Prisma.SelectSubset<T, WhatsAppConversationUpsertArgs<ExtArgs>>): Prisma.Prisma__WhatsAppConversationClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WhatsAppConversationCountArgs>(args?: Prisma.Subset<T, WhatsAppConversationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WhatsAppConversationCountAggregateOutputType> : number>;
    aggregate<T extends WhatsAppConversationAggregateArgs>(args: Prisma.Subset<T, WhatsAppConversationAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppConversationAggregateType<T>>;
    groupBy<T extends WhatsAppConversationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WhatsAppConversationGroupByArgs['orderBy'];
    } : {
        orderBy?: WhatsAppConversationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WhatsAppConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WhatsAppConversationFieldRefs;
}
export interface Prisma__WhatsAppConversationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    channelIdentity<T extends Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsAppChannelIdentityDefaultArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.WhatsAppConversation$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsAppConversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WhatsAppConversationFieldRefs {
    readonly id: Prisma.FieldRef<"WhatsAppConversation", 'String'>;
    readonly channelIdentityId: Prisma.FieldRef<"WhatsAppConversation", 'String'>;
    readonly phoneNumberId: Prisma.FieldRef<"WhatsAppConversation", 'String'>;
    readonly status: Prisma.FieldRef<"WhatsAppConversation", 'String'>;
    readonly lastMessageAt: Prisma.FieldRef<"WhatsAppConversation", 'DateTime'>;
    readonly lastMessagePreview: Prisma.FieldRef<"WhatsAppConversation", 'String'>;
    readonly unreadCount: Prisma.FieldRef<"WhatsAppConversation", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"WhatsAppConversation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WhatsAppConversation", 'DateTime'>;
}
export type WhatsAppConversationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where: Prisma.WhatsAppConversationWhereUniqueInput;
};
export type WhatsAppConversationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where: Prisma.WhatsAppConversationWhereUniqueInput;
};
export type WhatsAppConversationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppConversationWhereInput;
    orderBy?: Prisma.WhatsAppConversationOrderByWithRelationInput | Prisma.WhatsAppConversationOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppConversationScalarFieldEnum | Prisma.WhatsAppConversationScalarFieldEnum[];
};
export type WhatsAppConversationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppConversationWhereInput;
    orderBy?: Prisma.WhatsAppConversationOrderByWithRelationInput | Prisma.WhatsAppConversationOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppConversationScalarFieldEnum | Prisma.WhatsAppConversationScalarFieldEnum[];
};
export type WhatsAppConversationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppConversationWhereInput;
    orderBy?: Prisma.WhatsAppConversationOrderByWithRelationInput | Prisma.WhatsAppConversationOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppConversationScalarFieldEnum | Prisma.WhatsAppConversationScalarFieldEnum[];
};
export type WhatsAppConversationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppConversationCreateInput, Prisma.WhatsAppConversationUncheckedCreateInput>;
};
export type WhatsAppConversationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WhatsAppConversationCreateManyInput | Prisma.WhatsAppConversationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppConversationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    data: Prisma.WhatsAppConversationCreateManyInput | Prisma.WhatsAppConversationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WhatsAppConversationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WhatsAppConversationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppConversationUpdateInput, Prisma.WhatsAppConversationUncheckedUpdateInput>;
    where: Prisma.WhatsAppConversationWhereUniqueInput;
};
export type WhatsAppConversationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WhatsAppConversationUpdateManyMutationInput, Prisma.WhatsAppConversationUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppConversationWhereInput;
    limit?: number;
};
export type WhatsAppConversationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppConversationUpdateManyMutationInput, Prisma.WhatsAppConversationUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppConversationWhereInput;
    limit?: number;
    include?: Prisma.WhatsAppConversationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WhatsAppConversationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where: Prisma.WhatsAppConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppConversationCreateInput, Prisma.WhatsAppConversationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WhatsAppConversationUpdateInput, Prisma.WhatsAppConversationUncheckedUpdateInput>;
};
export type WhatsAppConversationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
    where: Prisma.WhatsAppConversationWhereUniqueInput;
};
export type WhatsAppConversationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppConversationWhereInput;
    limit?: number;
};
export type WhatsAppConversation$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppMessageWhereInput;
    orderBy?: Prisma.WhatsAppMessageOrderByWithRelationInput | Prisma.WhatsAppMessageOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppMessageScalarFieldEnum | Prisma.WhatsAppMessageScalarFieldEnum[];
};
export type WhatsAppConversationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppConversationSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppConversationOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppConversationInclude<ExtArgs> | null;
};
