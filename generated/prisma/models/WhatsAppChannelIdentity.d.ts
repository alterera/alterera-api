import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WhatsAppChannelIdentityModel = runtime.Types.Result.DefaultSelection<Prisma.$WhatsAppChannelIdentityPayload>;
export type AggregateWhatsAppChannelIdentity = {
    _count: WhatsAppChannelIdentityCountAggregateOutputType | null;
    _min: WhatsAppChannelIdentityMinAggregateOutputType | null;
    _max: WhatsAppChannelIdentityMaxAggregateOutputType | null;
};
export type WhatsAppChannelIdentityMinAggregateOutputType = {
    id: string | null;
    waId: string | null;
    phoneNumber: string | null;
    profileName: string | null;
    lastSeenAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WhatsAppChannelIdentityMaxAggregateOutputType = {
    id: string | null;
    waId: string | null;
    phoneNumber: string | null;
    profileName: string | null;
    lastSeenAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WhatsAppChannelIdentityCountAggregateOutputType = {
    id: number;
    waId: number;
    phoneNumber: number;
    profileName: number;
    lastSeenAt: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WhatsAppChannelIdentityMinAggregateInputType = {
    id?: true;
    waId?: true;
    phoneNumber?: true;
    profileName?: true;
    lastSeenAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WhatsAppChannelIdentityMaxAggregateInputType = {
    id?: true;
    waId?: true;
    phoneNumber?: true;
    profileName?: true;
    lastSeenAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WhatsAppChannelIdentityCountAggregateInputType = {
    id?: true;
    waId?: true;
    phoneNumber?: true;
    profileName?: true;
    lastSeenAt?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WhatsAppChannelIdentityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    orderBy?: Prisma.WhatsAppChannelIdentityOrderByWithRelationInput | Prisma.WhatsAppChannelIdentityOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WhatsAppChannelIdentityCountAggregateInputType;
    _min?: WhatsAppChannelIdentityMinAggregateInputType;
    _max?: WhatsAppChannelIdentityMaxAggregateInputType;
};
export type GetWhatsAppChannelIdentityAggregateType<T extends WhatsAppChannelIdentityAggregateArgs> = {
    [P in keyof T & keyof AggregateWhatsAppChannelIdentity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWhatsAppChannelIdentity[P]> : Prisma.GetScalarType<T[P], AggregateWhatsAppChannelIdentity[P]>;
};
export type WhatsAppChannelIdentityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    orderBy?: Prisma.WhatsAppChannelIdentityOrderByWithAggregationInput | Prisma.WhatsAppChannelIdentityOrderByWithAggregationInput[];
    by: Prisma.WhatsAppChannelIdentityScalarFieldEnum[] | Prisma.WhatsAppChannelIdentityScalarFieldEnum;
    having?: Prisma.WhatsAppChannelIdentityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WhatsAppChannelIdentityCountAggregateInputType | true;
    _min?: WhatsAppChannelIdentityMinAggregateInputType;
    _max?: WhatsAppChannelIdentityMaxAggregateInputType;
};
export type WhatsAppChannelIdentityGroupByOutputType = {
    id: string;
    waId: string;
    phoneNumber: string | null;
    profileName: string | null;
    lastSeenAt: Date | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WhatsAppChannelIdentityCountAggregateOutputType | null;
    _min: WhatsAppChannelIdentityMinAggregateOutputType | null;
    _max: WhatsAppChannelIdentityMaxAggregateOutputType | null;
};
export type GetWhatsAppChannelIdentityGroupByPayload<T extends WhatsAppChannelIdentityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WhatsAppChannelIdentityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WhatsAppChannelIdentityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WhatsAppChannelIdentityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WhatsAppChannelIdentityGroupByOutputType[P]>;
}>>;
export type WhatsAppChannelIdentityWhereInput = {
    AND?: Prisma.WhatsAppChannelIdentityWhereInput | Prisma.WhatsAppChannelIdentityWhereInput[];
    OR?: Prisma.WhatsAppChannelIdentityWhereInput[];
    NOT?: Prisma.WhatsAppChannelIdentityWhereInput | Prisma.WhatsAppChannelIdentityWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppChannelIdentity"> | string;
    waId?: Prisma.StringFilter<"WhatsAppChannelIdentity"> | string;
    phoneNumber?: Prisma.StringNullableFilter<"WhatsAppChannelIdentity"> | string | null;
    profileName?: Prisma.StringNullableFilter<"WhatsAppChannelIdentity"> | string | null;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"WhatsAppChannelIdentity"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"WhatsAppChannelIdentity">;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppChannelIdentity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppChannelIdentity"> | Date | string;
    messages?: Prisma.WhatsAppMessageListRelationFilter;
    conversations?: Prisma.WhatsAppConversationListRelationFilter;
};
export type WhatsAppChannelIdentityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    waId?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    messages?: Prisma.WhatsAppMessageOrderByRelationAggregateInput;
    conversations?: Prisma.WhatsAppConversationOrderByRelationAggregateInput;
};
export type WhatsAppChannelIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    waId?: string;
    AND?: Prisma.WhatsAppChannelIdentityWhereInput | Prisma.WhatsAppChannelIdentityWhereInput[];
    OR?: Prisma.WhatsAppChannelIdentityWhereInput[];
    NOT?: Prisma.WhatsAppChannelIdentityWhereInput | Prisma.WhatsAppChannelIdentityWhereInput[];
    phoneNumber?: Prisma.StringNullableFilter<"WhatsAppChannelIdentity"> | string | null;
    profileName?: Prisma.StringNullableFilter<"WhatsAppChannelIdentity"> | string | null;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"WhatsAppChannelIdentity"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"WhatsAppChannelIdentity">;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppChannelIdentity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppChannelIdentity"> | Date | string;
    messages?: Prisma.WhatsAppMessageListRelationFilter;
    conversations?: Prisma.WhatsAppConversationListRelationFilter;
}, "id" | "waId">;
export type WhatsAppChannelIdentityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    waId?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WhatsAppChannelIdentityCountOrderByAggregateInput;
    _max?: Prisma.WhatsAppChannelIdentityMaxOrderByAggregateInput;
    _min?: Prisma.WhatsAppChannelIdentityMinOrderByAggregateInput;
};
export type WhatsAppChannelIdentityScalarWhereWithAggregatesInput = {
    AND?: Prisma.WhatsAppChannelIdentityScalarWhereWithAggregatesInput | Prisma.WhatsAppChannelIdentityScalarWhereWithAggregatesInput[];
    OR?: Prisma.WhatsAppChannelIdentityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WhatsAppChannelIdentityScalarWhereWithAggregatesInput | Prisma.WhatsAppChannelIdentityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WhatsAppChannelIdentity"> | string;
    waId?: Prisma.StringWithAggregatesFilter<"WhatsAppChannelIdentity"> | string;
    phoneNumber?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppChannelIdentity"> | string | null;
    profileName?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppChannelIdentity"> | string | null;
    lastSeenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WhatsAppChannelIdentity"> | Date | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"WhatsAppChannelIdentity">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppChannelIdentity"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppChannelIdentity"> | Date | string;
};
export type WhatsAppChannelIdentityCreateInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageCreateNestedManyWithoutChannelIdentityInput;
    conversations?: Prisma.WhatsAppConversationCreateNestedManyWithoutChannelIdentityInput;
};
export type WhatsAppChannelIdentityUncheckedCreateInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedCreateNestedManyWithoutChannelIdentityInput;
    conversations?: Prisma.WhatsAppConversationUncheckedCreateNestedManyWithoutChannelIdentityInput;
};
export type WhatsAppChannelIdentityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUpdateManyWithoutChannelIdentityNestedInput;
    conversations?: Prisma.WhatsAppConversationUpdateManyWithoutChannelIdentityNestedInput;
};
export type WhatsAppChannelIdentityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedUpdateManyWithoutChannelIdentityNestedInput;
    conversations?: Prisma.WhatsAppConversationUncheckedUpdateManyWithoutChannelIdentityNestedInput;
};
export type WhatsAppChannelIdentityCreateManyInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppChannelIdentityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppChannelIdentityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppChannelIdentityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    waId?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profileName?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppChannelIdentityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    waId?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profileName?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppChannelIdentityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    waId?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    profileName?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppChannelIdentityScalarRelationFilter = {
    is?: Prisma.WhatsAppChannelIdentityWhereInput;
    isNot?: Prisma.WhatsAppChannelIdentityWhereInput;
};
export type WhatsAppChannelIdentityCreateNestedOneWithoutConversationsInput = {
    create?: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.WhatsAppChannelIdentityCreateOrConnectWithoutConversationsInput;
    connect?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
};
export type WhatsAppChannelIdentityUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.WhatsAppChannelIdentityCreateOrConnectWithoutConversationsInput;
    upsert?: Prisma.WhatsAppChannelIdentityUpsertWithoutConversationsInput;
    connect?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateToOneWithWhereWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUpdateWithoutConversationsInput>, Prisma.WhatsAppChannelIdentityUncheckedUpdateWithoutConversationsInput>;
};
export type WhatsAppChannelIdentityCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.WhatsAppChannelIdentityCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
};
export type WhatsAppChannelIdentityUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.WhatsAppChannelIdentityCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.WhatsAppChannelIdentityUpsertWithoutMessagesInput;
    connect?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateToOneWithWhereWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUpdateWithoutMessagesInput>, Prisma.WhatsAppChannelIdentityUncheckedUpdateWithoutMessagesInput>;
};
export type WhatsAppChannelIdentityCreateWithoutConversationsInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageCreateNestedManyWithoutChannelIdentityInput;
};
export type WhatsAppChannelIdentityUncheckedCreateWithoutConversationsInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedCreateNestedManyWithoutChannelIdentityInput;
};
export type WhatsAppChannelIdentityCreateOrConnectWithoutConversationsInput = {
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutConversationsInput>;
};
export type WhatsAppChannelIdentityUpsertWithoutConversationsInput = {
    update: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateWithoutConversationsInput>;
    create: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutConversationsInput>;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
};
export type WhatsAppChannelIdentityUpdateToOneWithWhereWithoutConversationsInput = {
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    data: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateWithoutConversationsInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateWithoutConversationsInput>;
};
export type WhatsAppChannelIdentityUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUpdateManyWithoutChannelIdentityNestedInput;
};
export type WhatsAppChannelIdentityUncheckedUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.WhatsAppMessageUncheckedUpdateManyWithoutChannelIdentityNestedInput;
};
export type WhatsAppChannelIdentityCreateWithoutMessagesInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.WhatsAppConversationCreateNestedManyWithoutChannelIdentityInput;
};
export type WhatsAppChannelIdentityUncheckedCreateWithoutMessagesInput = {
    id?: string;
    waId: string;
    phoneNumber?: string | null;
    profileName?: string | null;
    lastSeenAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.WhatsAppConversationUncheckedCreateNestedManyWithoutChannelIdentityInput;
};
export type WhatsAppChannelIdentityCreateOrConnectWithoutMessagesInput = {
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutMessagesInput>;
};
export type WhatsAppChannelIdentityUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
};
export type WhatsAppChannelIdentityUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    data: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateWithoutMessagesInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateWithoutMessagesInput>;
};
export type WhatsAppChannelIdentityUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.WhatsAppConversationUpdateManyWithoutChannelIdentityNestedInput;
};
export type WhatsAppChannelIdentityUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    waId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.WhatsAppConversationUncheckedUpdateManyWithoutChannelIdentityNestedInput;
};
export type WhatsAppChannelIdentityCountOutputType = {
    messages: number;
    conversations: number;
};
export type WhatsAppChannelIdentityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | WhatsAppChannelIdentityCountOutputTypeCountMessagesArgs;
    conversations?: boolean | WhatsAppChannelIdentityCountOutputTypeCountConversationsArgs;
};
export type WhatsAppChannelIdentityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentityCountOutputTypeSelect<ExtArgs> | null;
};
export type WhatsAppChannelIdentityCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppMessageWhereInput;
};
export type WhatsAppChannelIdentityCountOutputTypeCountConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppConversationWhereInput;
};
export type WhatsAppChannelIdentitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    waId?: boolean;
    phoneNumber?: boolean;
    profileName?: boolean;
    lastSeenAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    messages?: boolean | Prisma.WhatsAppChannelIdentity$messagesArgs<ExtArgs>;
    conversations?: boolean | Prisma.WhatsAppChannelIdentity$conversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.WhatsAppChannelIdentityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppChannelIdentity"]>;
export type WhatsAppChannelIdentitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    waId?: boolean;
    phoneNumber?: boolean;
    profileName?: boolean;
    lastSeenAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["whatsAppChannelIdentity"]>;
export type WhatsAppChannelIdentitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    waId?: boolean;
    phoneNumber?: boolean;
    profileName?: boolean;
    lastSeenAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["whatsAppChannelIdentity"]>;
export type WhatsAppChannelIdentitySelectScalar = {
    id?: boolean;
    waId?: boolean;
    phoneNumber?: boolean;
    profileName?: boolean;
    lastSeenAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WhatsAppChannelIdentityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "waId" | "phoneNumber" | "profileName" | "lastSeenAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppChannelIdentity"]>;
export type WhatsAppChannelIdentityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | Prisma.WhatsAppChannelIdentity$messagesArgs<ExtArgs>;
    conversations?: boolean | Prisma.WhatsAppChannelIdentity$conversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.WhatsAppChannelIdentityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WhatsAppChannelIdentityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WhatsAppChannelIdentityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WhatsAppChannelIdentityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WhatsAppChannelIdentity";
    objects: {
        messages: Prisma.$WhatsAppMessagePayload<ExtArgs>[];
        conversations: Prisma.$WhatsAppConversationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        waId: string;
        phoneNumber: string | null;
        profileName: string | null;
        lastSeenAt: Date | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["whatsAppChannelIdentity"]>;
    composites: {};
};
export type WhatsAppChannelIdentityGetPayload<S extends boolean | null | undefined | WhatsAppChannelIdentityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload, S>;
export type WhatsAppChannelIdentityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WhatsAppChannelIdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WhatsAppChannelIdentityCountAggregateInputType | true;
};
export interface WhatsAppChannelIdentityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppChannelIdentity'];
        meta: {
            name: 'WhatsAppChannelIdentity';
        };
    };
    findUnique<T extends WhatsAppChannelIdentityFindUniqueArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WhatsAppChannelIdentityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WhatsAppChannelIdentityFindFirstArgs>(args?: Prisma.SelectSubset<T, WhatsAppChannelIdentityFindFirstArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WhatsAppChannelIdentityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WhatsAppChannelIdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WhatsAppChannelIdentityFindManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppChannelIdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WhatsAppChannelIdentityCreateArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityCreateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WhatsAppChannelIdentityCreateManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppChannelIdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WhatsAppChannelIdentityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WhatsAppChannelIdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WhatsAppChannelIdentityDeleteArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityDeleteArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WhatsAppChannelIdentityUpdateArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityUpdateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WhatsAppChannelIdentityDeleteManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppChannelIdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WhatsAppChannelIdentityUpdateManyArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WhatsAppChannelIdentityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WhatsAppChannelIdentityUpsertArgs>(args: Prisma.SelectSubset<T, WhatsAppChannelIdentityUpsertArgs<ExtArgs>>): Prisma.Prisma__WhatsAppChannelIdentityClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppChannelIdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WhatsAppChannelIdentityCountArgs>(args?: Prisma.Subset<T, WhatsAppChannelIdentityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WhatsAppChannelIdentityCountAggregateOutputType> : number>;
    aggregate<T extends WhatsAppChannelIdentityAggregateArgs>(args: Prisma.Subset<T, WhatsAppChannelIdentityAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppChannelIdentityAggregateType<T>>;
    groupBy<T extends WhatsAppChannelIdentityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WhatsAppChannelIdentityGroupByArgs['orderBy'];
    } : {
        orderBy?: WhatsAppChannelIdentityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WhatsAppChannelIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppChannelIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WhatsAppChannelIdentityFieldRefs;
}
export interface Prisma__WhatsAppChannelIdentityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    messages<T extends Prisma.WhatsAppChannelIdentity$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsAppChannelIdentity$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations<T extends Prisma.WhatsAppChannelIdentity$conversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsAppChannelIdentity$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WhatsAppChannelIdentityFieldRefs {
    readonly id: Prisma.FieldRef<"WhatsAppChannelIdentity", 'String'>;
    readonly waId: Prisma.FieldRef<"WhatsAppChannelIdentity", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"WhatsAppChannelIdentity", 'String'>;
    readonly profileName: Prisma.FieldRef<"WhatsAppChannelIdentity", 'String'>;
    readonly lastSeenAt: Prisma.FieldRef<"WhatsAppChannelIdentity", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"WhatsAppChannelIdentity", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"WhatsAppChannelIdentity", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WhatsAppChannelIdentity", 'DateTime'>;
}
export type WhatsAppChannelIdentityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
};
export type WhatsAppChannelIdentityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
};
export type WhatsAppChannelIdentityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    orderBy?: Prisma.WhatsAppChannelIdentityOrderByWithRelationInput | Prisma.WhatsAppChannelIdentityOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppChannelIdentityScalarFieldEnum | Prisma.WhatsAppChannelIdentityScalarFieldEnum[];
};
export type WhatsAppChannelIdentityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    orderBy?: Prisma.WhatsAppChannelIdentityOrderByWithRelationInput | Prisma.WhatsAppChannelIdentityOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppChannelIdentityScalarFieldEnum | Prisma.WhatsAppChannelIdentityScalarFieldEnum[];
};
export type WhatsAppChannelIdentityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    orderBy?: Prisma.WhatsAppChannelIdentityOrderByWithRelationInput | Prisma.WhatsAppChannelIdentityOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppChannelIdentityScalarFieldEnum | Prisma.WhatsAppChannelIdentityScalarFieldEnum[];
};
export type WhatsAppChannelIdentityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateInput, Prisma.WhatsAppChannelIdentityUncheckedCreateInput>;
};
export type WhatsAppChannelIdentityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WhatsAppChannelIdentityCreateManyInput | Prisma.WhatsAppChannelIdentityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppChannelIdentityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    data: Prisma.WhatsAppChannelIdentityCreateManyInput | Prisma.WhatsAppChannelIdentityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppChannelIdentityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateInput>;
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
};
export type WhatsAppChannelIdentityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateManyMutationInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    limit?: number;
};
export type WhatsAppChannelIdentityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateManyMutationInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    limit?: number;
};
export type WhatsAppChannelIdentityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppChannelIdentityCreateInput, Prisma.WhatsAppChannelIdentityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WhatsAppChannelIdentityUpdateInput, Prisma.WhatsAppChannelIdentityUncheckedUpdateInput>;
};
export type WhatsAppChannelIdentityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
    where: Prisma.WhatsAppChannelIdentityWhereUniqueInput;
};
export type WhatsAppChannelIdentityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppChannelIdentityWhereInput;
    limit?: number;
};
export type WhatsAppChannelIdentity$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WhatsAppChannelIdentity$conversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WhatsAppChannelIdentityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppChannelIdentitySelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppChannelIdentityOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppChannelIdentityInclude<ExtArgs> | null;
};
