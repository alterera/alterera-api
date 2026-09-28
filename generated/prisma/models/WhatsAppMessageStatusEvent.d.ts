import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WhatsAppMessageStatusEventModel = runtime.Types.Result.DefaultSelection<Prisma.$WhatsAppMessageStatusEventPayload>;
export type AggregateWhatsAppMessageStatusEvent = {
    _count: WhatsAppMessageStatusEventCountAggregateOutputType | null;
    _min: WhatsAppMessageStatusEventMinAggregateOutputType | null;
    _max: WhatsAppMessageStatusEventMaxAggregateOutputType | null;
};
export type WhatsAppMessageStatusEventMinAggregateOutputType = {
    id: string | null;
    messageId: string | null;
    status: string | null;
    metaTimestamp: Date | null;
    createdAt: Date | null;
};
export type WhatsAppMessageStatusEventMaxAggregateOutputType = {
    id: string | null;
    messageId: string | null;
    status: string | null;
    metaTimestamp: Date | null;
    createdAt: Date | null;
};
export type WhatsAppMessageStatusEventCountAggregateOutputType = {
    id: number;
    messageId: number;
    status: number;
    metaTimestamp: number;
    rawPayload: number;
    createdAt: number;
    _all: number;
};
export type WhatsAppMessageStatusEventMinAggregateInputType = {
    id?: true;
    messageId?: true;
    status?: true;
    metaTimestamp?: true;
    createdAt?: true;
};
export type WhatsAppMessageStatusEventMaxAggregateInputType = {
    id?: true;
    messageId?: true;
    status?: true;
    metaTimestamp?: true;
    createdAt?: true;
};
export type WhatsAppMessageStatusEventCountAggregateInputType = {
    id?: true;
    messageId?: true;
    status?: true;
    metaTimestamp?: true;
    rawPayload?: true;
    createdAt?: true;
    _all?: true;
};
export type WhatsAppMessageStatusEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    orderBy?: Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput | Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WhatsAppMessageStatusEventCountAggregateInputType;
    _min?: WhatsAppMessageStatusEventMinAggregateInputType;
    _max?: WhatsAppMessageStatusEventMaxAggregateInputType;
};
export type GetWhatsAppMessageStatusEventAggregateType<T extends WhatsAppMessageStatusEventAggregateArgs> = {
    [P in keyof T & keyof AggregateWhatsAppMessageStatusEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWhatsAppMessageStatusEvent[P]> : Prisma.GetScalarType<T[P], AggregateWhatsAppMessageStatusEvent[P]>;
};
export type WhatsAppMessageStatusEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    orderBy?: Prisma.WhatsAppMessageStatusEventOrderByWithAggregationInput | Prisma.WhatsAppMessageStatusEventOrderByWithAggregationInput[];
    by: Prisma.WhatsAppMessageStatusEventScalarFieldEnum[] | Prisma.WhatsAppMessageStatusEventScalarFieldEnum;
    having?: Prisma.WhatsAppMessageStatusEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WhatsAppMessageStatusEventCountAggregateInputType | true;
    _min?: WhatsAppMessageStatusEventMinAggregateInputType;
    _max?: WhatsAppMessageStatusEventMaxAggregateInputType;
};
export type WhatsAppMessageStatusEventGroupByOutputType = {
    id: string;
    messageId: string;
    status: string;
    metaTimestamp: Date | null;
    rawPayload: runtime.JsonValue | null;
    createdAt: Date;
    _count: WhatsAppMessageStatusEventCountAggregateOutputType | null;
    _min: WhatsAppMessageStatusEventMinAggregateOutputType | null;
    _max: WhatsAppMessageStatusEventMaxAggregateOutputType | null;
};
export type GetWhatsAppMessageStatusEventGroupByPayload<T extends WhatsAppMessageStatusEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WhatsAppMessageStatusEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WhatsAppMessageStatusEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WhatsAppMessageStatusEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WhatsAppMessageStatusEventGroupByOutputType[P]>;
}>>;
export type WhatsAppMessageStatusEventWhereInput = {
    AND?: Prisma.WhatsAppMessageStatusEventWhereInput | Prisma.WhatsAppMessageStatusEventWhereInput[];
    OR?: Prisma.WhatsAppMessageStatusEventWhereInput[];
    NOT?: Prisma.WhatsAppMessageStatusEventWhereInput | Prisma.WhatsAppMessageStatusEventWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    messageId?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    status?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    metaTimestamp?: Prisma.DateTimeNullableFilter<"WhatsAppMessageStatusEvent"> | Date | string | null;
    rawPayload?: Prisma.JsonNullableFilter<"WhatsAppMessageStatusEvent">;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppMessageStatusEvent"> | Date | string;
    message?: Prisma.XOR<Prisma.WhatsAppMessageScalarRelationFilter, Prisma.WhatsAppMessageWhereInput>;
};
export type WhatsAppMessageStatusEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metaTimestamp?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    message?: Prisma.WhatsAppMessageOrderByWithRelationInput;
};
export type WhatsAppMessageStatusEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WhatsAppMessageStatusEventWhereInput | Prisma.WhatsAppMessageStatusEventWhereInput[];
    OR?: Prisma.WhatsAppMessageStatusEventWhereInput[];
    NOT?: Prisma.WhatsAppMessageStatusEventWhereInput | Prisma.WhatsAppMessageStatusEventWhereInput[];
    messageId?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    status?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    metaTimestamp?: Prisma.DateTimeNullableFilter<"WhatsAppMessageStatusEvent"> | Date | string | null;
    rawPayload?: Prisma.JsonNullableFilter<"WhatsAppMessageStatusEvent">;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppMessageStatusEvent"> | Date | string;
    message?: Prisma.XOR<Prisma.WhatsAppMessageScalarRelationFilter, Prisma.WhatsAppMessageWhereInput>;
}, "id">;
export type WhatsAppMessageStatusEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metaTimestamp?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WhatsAppMessageStatusEventCountOrderByAggregateInput;
    _max?: Prisma.WhatsAppMessageStatusEventMaxOrderByAggregateInput;
    _min?: Prisma.WhatsAppMessageStatusEventMinOrderByAggregateInput;
};
export type WhatsAppMessageStatusEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.WhatsAppMessageStatusEventScalarWhereWithAggregatesInput | Prisma.WhatsAppMessageStatusEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.WhatsAppMessageStatusEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WhatsAppMessageStatusEventScalarWhereWithAggregatesInput | Prisma.WhatsAppMessageStatusEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WhatsAppMessageStatusEvent"> | string;
    messageId?: Prisma.StringWithAggregatesFilter<"WhatsAppMessageStatusEvent"> | string;
    status?: Prisma.StringWithAggregatesFilter<"WhatsAppMessageStatusEvent"> | string;
    metaTimestamp?: Prisma.DateTimeNullableWithAggregatesFilter<"WhatsAppMessageStatusEvent"> | Date | string | null;
    rawPayload?: Prisma.JsonNullableWithAggregatesFilter<"WhatsAppMessageStatusEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppMessageStatusEvent"> | Date | string;
};
export type WhatsAppMessageStatusEventCreateInput = {
    id?: string;
    status: string;
    metaTimestamp?: Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    message: Prisma.WhatsAppMessageCreateNestedOneWithoutStatusEventsInput;
};
export type WhatsAppMessageStatusEventUncheckedCreateInput = {
    id?: string;
    messageId: string;
    status: string;
    metaTimestamp?: Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WhatsAppMessageStatusEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.WhatsAppMessageUpdateOneRequiredWithoutStatusEventsNestedInput;
};
export type WhatsAppMessageStatusEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    messageId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppMessageStatusEventCreateManyInput = {
    id?: string;
    messageId: string;
    status: string;
    metaTimestamp?: Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WhatsAppMessageStatusEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppMessageStatusEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    messageId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppMessageStatusEventListRelationFilter = {
    every?: Prisma.WhatsAppMessageStatusEventWhereInput;
    some?: Prisma.WhatsAppMessageStatusEventWhereInput;
    none?: Prisma.WhatsAppMessageStatusEventWhereInput;
};
export type WhatsAppMessageStatusEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WhatsAppMessageStatusEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metaTimestamp?: Prisma.SortOrder;
    rawPayload?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppMessageStatusEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metaTimestamp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppMessageStatusEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metaTimestamp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppMessageStatusEventCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput> | Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput[] | Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput | Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.WhatsAppMessageStatusEventCreateManyMessageInputEnvelope;
    connect?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
};
export type WhatsAppMessageStatusEventUncheckedCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput> | Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput[] | Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput | Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.WhatsAppMessageStatusEventCreateManyMessageInputEnvelope;
    connect?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
};
export type WhatsAppMessageStatusEventUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput> | Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput[] | Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput | Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.WhatsAppMessageStatusEventUpsertWithWhereUniqueWithoutMessageInput | Prisma.WhatsAppMessageStatusEventUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.WhatsAppMessageStatusEventCreateManyMessageInputEnvelope;
    set?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    disconnect?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    delete?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    connect?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    update?: Prisma.WhatsAppMessageStatusEventUpdateWithWhereUniqueWithoutMessageInput | Prisma.WhatsAppMessageStatusEventUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.WhatsAppMessageStatusEventUpdateManyWithWhereWithoutMessageInput | Prisma.WhatsAppMessageStatusEventUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.WhatsAppMessageStatusEventScalarWhereInput | Prisma.WhatsAppMessageStatusEventScalarWhereInput[];
};
export type WhatsAppMessageStatusEventUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput> | Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput[] | Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput | Prisma.WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.WhatsAppMessageStatusEventUpsertWithWhereUniqueWithoutMessageInput | Prisma.WhatsAppMessageStatusEventUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.WhatsAppMessageStatusEventCreateManyMessageInputEnvelope;
    set?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    disconnect?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    delete?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    connect?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput | Prisma.WhatsAppMessageStatusEventWhereUniqueInput[];
    update?: Prisma.WhatsAppMessageStatusEventUpdateWithWhereUniqueWithoutMessageInput | Prisma.WhatsAppMessageStatusEventUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.WhatsAppMessageStatusEventUpdateManyWithWhereWithoutMessageInput | Prisma.WhatsAppMessageStatusEventUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.WhatsAppMessageStatusEventScalarWhereInput | Prisma.WhatsAppMessageStatusEventScalarWhereInput[];
};
export type WhatsAppMessageStatusEventCreateWithoutMessageInput = {
    id?: string;
    status: string;
    metaTimestamp?: Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput = {
    id?: string;
    status: string;
    metaTimestamp?: Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WhatsAppMessageStatusEventCreateOrConnectWithoutMessageInput = {
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput>;
};
export type WhatsAppMessageStatusEventCreateManyMessageInputEnvelope = {
    data: Prisma.WhatsAppMessageStatusEventCreateManyMessageInput | Prisma.WhatsAppMessageStatusEventCreateManyMessageInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppMessageStatusEventUpsertWithWhereUniqueWithoutMessageInput = {
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateWithoutMessageInput>;
    create: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateWithoutMessageInput>;
};
export type WhatsAppMessageStatusEventUpdateWithWhereUniqueWithoutMessageInput = {
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateWithoutMessageInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateWithoutMessageInput>;
};
export type WhatsAppMessageStatusEventUpdateManyWithWhereWithoutMessageInput = {
    where: Prisma.WhatsAppMessageStatusEventScalarWhereInput;
    data: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateManyMutationInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateManyWithoutMessageInput>;
};
export type WhatsAppMessageStatusEventScalarWhereInput = {
    AND?: Prisma.WhatsAppMessageStatusEventScalarWhereInput | Prisma.WhatsAppMessageStatusEventScalarWhereInput[];
    OR?: Prisma.WhatsAppMessageStatusEventScalarWhereInput[];
    NOT?: Prisma.WhatsAppMessageStatusEventScalarWhereInput | Prisma.WhatsAppMessageStatusEventScalarWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    messageId?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    status?: Prisma.StringFilter<"WhatsAppMessageStatusEvent"> | string;
    metaTimestamp?: Prisma.DateTimeNullableFilter<"WhatsAppMessageStatusEvent"> | Date | string | null;
    rawPayload?: Prisma.JsonNullableFilter<"WhatsAppMessageStatusEvent">;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppMessageStatusEvent"> | Date | string;
};
export type WhatsAppMessageStatusEventCreateManyMessageInput = {
    id?: string;
    status: string;
    metaTimestamp?: Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WhatsAppMessageStatusEventUpdateWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppMessageStatusEventUncheckedUpdateWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppMessageStatusEventUncheckedUpdateManyWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTimestamp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppMessageStatusEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    messageId?: boolean;
    status?: boolean;
    metaTimestamp?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
    message?: boolean | Prisma.WhatsAppMessageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppMessageStatusEvent"]>;
export type WhatsAppMessageStatusEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    messageId?: boolean;
    status?: boolean;
    metaTimestamp?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
    message?: boolean | Prisma.WhatsAppMessageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppMessageStatusEvent"]>;
export type WhatsAppMessageStatusEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    messageId?: boolean;
    status?: boolean;
    metaTimestamp?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
    message?: boolean | Prisma.WhatsAppMessageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["whatsAppMessageStatusEvent"]>;
export type WhatsAppMessageStatusEventSelectScalar = {
    id?: boolean;
    messageId?: boolean;
    status?: boolean;
    metaTimestamp?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
};
export type WhatsAppMessageStatusEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "messageId" | "status" | "metaTimestamp" | "rawPayload" | "createdAt", ExtArgs["result"]["whatsAppMessageStatusEvent"]>;
export type WhatsAppMessageStatusEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.WhatsAppMessageDefaultArgs<ExtArgs>;
};
export type WhatsAppMessageStatusEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.WhatsAppMessageDefaultArgs<ExtArgs>;
};
export type WhatsAppMessageStatusEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.WhatsAppMessageDefaultArgs<ExtArgs>;
};
export type $WhatsAppMessageStatusEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WhatsAppMessageStatusEvent";
    objects: {
        message: Prisma.$WhatsAppMessagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        messageId: string;
        status: string;
        metaTimestamp: Date | null;
        rawPayload: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["whatsAppMessageStatusEvent"]>;
    composites: {};
};
export type WhatsAppMessageStatusEventGetPayload<S extends boolean | null | undefined | WhatsAppMessageStatusEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload, S>;
export type WhatsAppMessageStatusEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WhatsAppMessageStatusEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WhatsAppMessageStatusEventCountAggregateInputType | true;
};
export interface WhatsAppMessageStatusEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppMessageStatusEvent'];
        meta: {
            name: 'WhatsAppMessageStatusEvent';
        };
    };
    findUnique<T extends WhatsAppMessageStatusEventFindUniqueArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WhatsAppMessageStatusEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WhatsAppMessageStatusEventFindFirstArgs>(args?: Prisma.SelectSubset<T, WhatsAppMessageStatusEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WhatsAppMessageStatusEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WhatsAppMessageStatusEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WhatsAppMessageStatusEventFindManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppMessageStatusEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WhatsAppMessageStatusEventCreateArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventCreateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WhatsAppMessageStatusEventCreateManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppMessageStatusEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WhatsAppMessageStatusEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WhatsAppMessageStatusEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WhatsAppMessageStatusEventDeleteArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventDeleteArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WhatsAppMessageStatusEventUpdateArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventUpdateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WhatsAppMessageStatusEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppMessageStatusEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WhatsAppMessageStatusEventUpdateManyArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WhatsAppMessageStatusEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WhatsAppMessageStatusEventUpsertArgs>(args: Prisma.SelectSubset<T, WhatsAppMessageStatusEventUpsertArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageStatusEventClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessageStatusEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WhatsAppMessageStatusEventCountArgs>(args?: Prisma.Subset<T, WhatsAppMessageStatusEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WhatsAppMessageStatusEventCountAggregateOutputType> : number>;
    aggregate<T extends WhatsAppMessageStatusEventAggregateArgs>(args: Prisma.Subset<T, WhatsAppMessageStatusEventAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppMessageStatusEventAggregateType<T>>;
    groupBy<T extends WhatsAppMessageStatusEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WhatsAppMessageStatusEventGroupByArgs['orderBy'];
    } : {
        orderBy?: WhatsAppMessageStatusEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WhatsAppMessageStatusEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppMessageStatusEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WhatsAppMessageStatusEventFieldRefs;
}
export interface Prisma__WhatsAppMessageStatusEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    message<T extends Prisma.WhatsAppMessageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WhatsAppMessageDefaultArgs<ExtArgs>>): Prisma.Prisma__WhatsAppMessageClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WhatsAppMessageStatusEventFieldRefs {
    readonly id: Prisma.FieldRef<"WhatsAppMessageStatusEvent", 'String'>;
    readonly messageId: Prisma.FieldRef<"WhatsAppMessageStatusEvent", 'String'>;
    readonly status: Prisma.FieldRef<"WhatsAppMessageStatusEvent", 'String'>;
    readonly metaTimestamp: Prisma.FieldRef<"WhatsAppMessageStatusEvent", 'DateTime'>;
    readonly rawPayload: Prisma.FieldRef<"WhatsAppMessageStatusEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"WhatsAppMessageStatusEvent", 'DateTime'>;
}
export type WhatsAppMessageStatusEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
};
export type WhatsAppMessageStatusEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
};
export type WhatsAppMessageStatusEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    orderBy?: Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput | Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppMessageStatusEventScalarFieldEnum | Prisma.WhatsAppMessageStatusEventScalarFieldEnum[];
};
export type WhatsAppMessageStatusEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    orderBy?: Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput | Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppMessageStatusEventScalarFieldEnum | Prisma.WhatsAppMessageStatusEventScalarFieldEnum[];
};
export type WhatsAppMessageStatusEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    orderBy?: Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput | Prisma.WhatsAppMessageStatusEventOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppMessageStatusEventScalarFieldEnum | Prisma.WhatsAppMessageStatusEventScalarFieldEnum[];
};
export type WhatsAppMessageStatusEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateInput>;
};
export type WhatsAppMessageStatusEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WhatsAppMessageStatusEventCreateManyInput | Prisma.WhatsAppMessageStatusEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppMessageStatusEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    data: Prisma.WhatsAppMessageStatusEventCreateManyInput | Prisma.WhatsAppMessageStatusEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WhatsAppMessageStatusEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WhatsAppMessageStatusEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateInput>;
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
};
export type WhatsAppMessageStatusEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateManyMutationInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    limit?: number;
};
export type WhatsAppMessageStatusEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateManyMutationInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    limit?: number;
    include?: Prisma.WhatsAppMessageStatusEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WhatsAppMessageStatusEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppMessageStatusEventCreateInput, Prisma.WhatsAppMessageStatusEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WhatsAppMessageStatusEventUpdateInput, Prisma.WhatsAppMessageStatusEventUncheckedUpdateInput>;
};
export type WhatsAppMessageStatusEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
    where: Prisma.WhatsAppMessageStatusEventWhereUniqueInput;
};
export type WhatsAppMessageStatusEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppMessageStatusEventWhereInput;
    limit?: number;
};
export type WhatsAppMessageStatusEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppMessageStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppMessageStatusEventOmit<ExtArgs> | null;
    include?: Prisma.WhatsAppMessageStatusEventInclude<ExtArgs> | null;
};
