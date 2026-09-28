import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WhatsAppTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$WhatsAppTemplatePayload>;
export type AggregateWhatsAppTemplate = {
    _count: WhatsAppTemplateCountAggregateOutputType | null;
    _min: WhatsAppTemplateMinAggregateOutputType | null;
    _max: WhatsAppTemplateMaxAggregateOutputType | null;
};
export type WhatsAppTemplateMinAggregateOutputType = {
    id: string | null;
    metaTemplateId: string | null;
    name: string | null;
    language: string | null;
    category: string | null;
    status: string | null;
    lastSyncedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WhatsAppTemplateMaxAggregateOutputType = {
    id: string | null;
    metaTemplateId: string | null;
    name: string | null;
    language: string | null;
    category: string | null;
    status: string | null;
    lastSyncedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WhatsAppTemplateCountAggregateOutputType = {
    id: number;
    metaTemplateId: number;
    name: number;
    language: number;
    category: number;
    status: number;
    components: number;
    lastSyncedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WhatsAppTemplateMinAggregateInputType = {
    id?: true;
    metaTemplateId?: true;
    name?: true;
    language?: true;
    category?: true;
    status?: true;
    lastSyncedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WhatsAppTemplateMaxAggregateInputType = {
    id?: true;
    metaTemplateId?: true;
    name?: true;
    language?: true;
    category?: true;
    status?: true;
    lastSyncedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WhatsAppTemplateCountAggregateInputType = {
    id?: true;
    metaTemplateId?: true;
    name?: true;
    language?: true;
    category?: true;
    status?: true;
    components?: true;
    lastSyncedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WhatsAppTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppTemplateWhereInput;
    orderBy?: Prisma.WhatsAppTemplateOrderByWithRelationInput | Prisma.WhatsAppTemplateOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WhatsAppTemplateCountAggregateInputType;
    _min?: WhatsAppTemplateMinAggregateInputType;
    _max?: WhatsAppTemplateMaxAggregateInputType;
};
export type GetWhatsAppTemplateAggregateType<T extends WhatsAppTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateWhatsAppTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWhatsAppTemplate[P]> : Prisma.GetScalarType<T[P], AggregateWhatsAppTemplate[P]>;
};
export type WhatsAppTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppTemplateWhereInput;
    orderBy?: Prisma.WhatsAppTemplateOrderByWithAggregationInput | Prisma.WhatsAppTemplateOrderByWithAggregationInput[];
    by: Prisma.WhatsAppTemplateScalarFieldEnum[] | Prisma.WhatsAppTemplateScalarFieldEnum;
    having?: Prisma.WhatsAppTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WhatsAppTemplateCountAggregateInputType | true;
    _min?: WhatsAppTemplateMinAggregateInputType;
    _max?: WhatsAppTemplateMaxAggregateInputType;
};
export type WhatsAppTemplateGroupByOutputType = {
    id: string;
    metaTemplateId: string | null;
    name: string;
    language: string;
    category: string | null;
    status: string | null;
    components: runtime.JsonValue | null;
    lastSyncedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WhatsAppTemplateCountAggregateOutputType | null;
    _min: WhatsAppTemplateMinAggregateOutputType | null;
    _max: WhatsAppTemplateMaxAggregateOutputType | null;
};
export type GetWhatsAppTemplateGroupByPayload<T extends WhatsAppTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WhatsAppTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WhatsAppTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WhatsAppTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WhatsAppTemplateGroupByOutputType[P]>;
}>>;
export type WhatsAppTemplateWhereInput = {
    AND?: Prisma.WhatsAppTemplateWhereInput | Prisma.WhatsAppTemplateWhereInput[];
    OR?: Prisma.WhatsAppTemplateWhereInput[];
    NOT?: Prisma.WhatsAppTemplateWhereInput | Prisma.WhatsAppTemplateWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppTemplate"> | string;
    metaTemplateId?: Prisma.StringNullableFilter<"WhatsAppTemplate"> | string | null;
    name?: Prisma.StringFilter<"WhatsAppTemplate"> | string;
    language?: Prisma.StringFilter<"WhatsAppTemplate"> | string;
    category?: Prisma.StringNullableFilter<"WhatsAppTemplate"> | string | null;
    status?: Prisma.StringNullableFilter<"WhatsAppTemplate"> | string | null;
    components?: Prisma.JsonNullableFilter<"WhatsAppTemplate">;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"WhatsAppTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppTemplate"> | Date | string;
};
export type WhatsAppTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    metaTemplateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    components?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    metaTemplateId?: string;
    name_language?: Prisma.WhatsAppTemplateNameLanguageCompoundUniqueInput;
    AND?: Prisma.WhatsAppTemplateWhereInput | Prisma.WhatsAppTemplateWhereInput[];
    OR?: Prisma.WhatsAppTemplateWhereInput[];
    NOT?: Prisma.WhatsAppTemplateWhereInput | Prisma.WhatsAppTemplateWhereInput[];
    name?: Prisma.StringFilter<"WhatsAppTemplate"> | string;
    language?: Prisma.StringFilter<"WhatsAppTemplate"> | string;
    category?: Prisma.StringNullableFilter<"WhatsAppTemplate"> | string | null;
    status?: Prisma.StringNullableFilter<"WhatsAppTemplate"> | string | null;
    components?: Prisma.JsonNullableFilter<"WhatsAppTemplate">;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"WhatsAppTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WhatsAppTemplate"> | Date | string;
}, "id" | "metaTemplateId" | "name_language">;
export type WhatsAppTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    metaTemplateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    components?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WhatsAppTemplateCountOrderByAggregateInput;
    _max?: Prisma.WhatsAppTemplateMaxOrderByAggregateInput;
    _min?: Prisma.WhatsAppTemplateMinOrderByAggregateInput;
};
export type WhatsAppTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.WhatsAppTemplateScalarWhereWithAggregatesInput | Prisma.WhatsAppTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.WhatsAppTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WhatsAppTemplateScalarWhereWithAggregatesInput | Prisma.WhatsAppTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WhatsAppTemplate"> | string;
    metaTemplateId?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppTemplate"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"WhatsAppTemplate"> | string;
    language?: Prisma.StringWithAggregatesFilter<"WhatsAppTemplate"> | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppTemplate"> | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppTemplate"> | string | null;
    components?: Prisma.JsonNullableWithAggregatesFilter<"WhatsAppTemplate">;
    lastSyncedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WhatsAppTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppTemplate"> | Date | string;
};
export type WhatsAppTemplateCreateInput = {
    id?: string;
    metaTemplateId?: string | null;
    name: string;
    language: string;
    category?: string | null;
    status?: string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppTemplateUncheckedCreateInput = {
    id?: string;
    metaTemplateId?: string | null;
    name: string;
    language: string;
    category?: string | null;
    status?: string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppTemplateCreateManyInput = {
    id?: string;
    metaTemplateId?: string | null;
    name: string;
    language: string;
    category?: string | null;
    status?: string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WhatsAppTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    components?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppTemplateNameLanguageCompoundUniqueInput = {
    name: string;
    language: string;
};
export type WhatsAppTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metaTemplateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    components?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metaTemplateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metaTemplateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WhatsAppTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metaTemplateId?: boolean;
    name?: boolean;
    language?: boolean;
    category?: boolean;
    status?: boolean;
    components?: boolean;
    lastSyncedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["whatsAppTemplate"]>;
export type WhatsAppTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metaTemplateId?: boolean;
    name?: boolean;
    language?: boolean;
    category?: boolean;
    status?: boolean;
    components?: boolean;
    lastSyncedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["whatsAppTemplate"]>;
export type WhatsAppTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metaTemplateId?: boolean;
    name?: boolean;
    language?: boolean;
    category?: boolean;
    status?: boolean;
    components?: boolean;
    lastSyncedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["whatsAppTemplate"]>;
export type WhatsAppTemplateSelectScalar = {
    id?: boolean;
    metaTemplateId?: boolean;
    name?: boolean;
    language?: boolean;
    category?: boolean;
    status?: boolean;
    components?: boolean;
    lastSyncedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WhatsAppTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "metaTemplateId" | "name" | "language" | "category" | "status" | "components" | "lastSyncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppTemplate"]>;
export type $WhatsAppTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WhatsAppTemplate";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        metaTemplateId: string | null;
        name: string;
        language: string;
        category: string | null;
        status: string | null;
        components: runtime.JsonValue | null;
        lastSyncedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["whatsAppTemplate"]>;
    composites: {};
};
export type WhatsAppTemplateGetPayload<S extends boolean | null | undefined | WhatsAppTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload, S>;
export type WhatsAppTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WhatsAppTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WhatsAppTemplateCountAggregateInputType | true;
};
export interface WhatsAppTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppTemplate'];
        meta: {
            name: 'WhatsAppTemplate';
        };
    };
    findUnique<T extends WhatsAppTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WhatsAppTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WhatsAppTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, WhatsAppTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WhatsAppTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WhatsAppTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WhatsAppTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WhatsAppTemplateCreateArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WhatsAppTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WhatsAppTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WhatsAppTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WhatsAppTemplateDeleteArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WhatsAppTemplateUpdateArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WhatsAppTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WhatsAppTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WhatsAppTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WhatsAppTemplateUpsertArgs>(args: Prisma.SelectSubset<T, WhatsAppTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__WhatsAppTemplateClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WhatsAppTemplateCountArgs>(args?: Prisma.Subset<T, WhatsAppTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WhatsAppTemplateCountAggregateOutputType> : number>;
    aggregate<T extends WhatsAppTemplateAggregateArgs>(args: Prisma.Subset<T, WhatsAppTemplateAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppTemplateAggregateType<T>>;
    groupBy<T extends WhatsAppTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WhatsAppTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: WhatsAppTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WhatsAppTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WhatsAppTemplateFieldRefs;
}
export interface Prisma__WhatsAppTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WhatsAppTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"WhatsAppTemplate", 'String'>;
    readonly metaTemplateId: Prisma.FieldRef<"WhatsAppTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"WhatsAppTemplate", 'String'>;
    readonly language: Prisma.FieldRef<"WhatsAppTemplate", 'String'>;
    readonly category: Prisma.FieldRef<"WhatsAppTemplate", 'String'>;
    readonly status: Prisma.FieldRef<"WhatsAppTemplate", 'String'>;
    readonly components: Prisma.FieldRef<"WhatsAppTemplate", 'Json'>;
    readonly lastSyncedAt: Prisma.FieldRef<"WhatsAppTemplate", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WhatsAppTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WhatsAppTemplate", 'DateTime'>;
}
export type WhatsAppTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where: Prisma.WhatsAppTemplateWhereUniqueInput;
};
export type WhatsAppTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where: Prisma.WhatsAppTemplateWhereUniqueInput;
};
export type WhatsAppTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where?: Prisma.WhatsAppTemplateWhereInput;
    orderBy?: Prisma.WhatsAppTemplateOrderByWithRelationInput | Prisma.WhatsAppTemplateOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppTemplateScalarFieldEnum | Prisma.WhatsAppTemplateScalarFieldEnum[];
};
export type WhatsAppTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where?: Prisma.WhatsAppTemplateWhereInput;
    orderBy?: Prisma.WhatsAppTemplateOrderByWithRelationInput | Prisma.WhatsAppTemplateOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppTemplateScalarFieldEnum | Prisma.WhatsAppTemplateScalarFieldEnum[];
};
export type WhatsAppTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where?: Prisma.WhatsAppTemplateWhereInput;
    orderBy?: Prisma.WhatsAppTemplateOrderByWithRelationInput | Prisma.WhatsAppTemplateOrderByWithRelationInput[];
    cursor?: Prisma.WhatsAppTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WhatsAppTemplateScalarFieldEnum | Prisma.WhatsAppTemplateScalarFieldEnum[];
};
export type WhatsAppTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppTemplateCreateInput, Prisma.WhatsAppTemplateUncheckedCreateInput>;
};
export type WhatsAppTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WhatsAppTemplateCreateManyInput | Prisma.WhatsAppTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    data: Prisma.WhatsAppTemplateCreateManyInput | Prisma.WhatsAppTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WhatsAppTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppTemplateUpdateInput, Prisma.WhatsAppTemplateUncheckedUpdateInput>;
    where: Prisma.WhatsAppTemplateWhereUniqueInput;
};
export type WhatsAppTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WhatsAppTemplateUpdateManyMutationInput, Prisma.WhatsAppTemplateUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppTemplateWhereInput;
    limit?: number;
};
export type WhatsAppTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WhatsAppTemplateUpdateManyMutationInput, Prisma.WhatsAppTemplateUncheckedUpdateManyInput>;
    where?: Prisma.WhatsAppTemplateWhereInput;
    limit?: number;
};
export type WhatsAppTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where: Prisma.WhatsAppTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.WhatsAppTemplateCreateInput, Prisma.WhatsAppTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WhatsAppTemplateUpdateInput, Prisma.WhatsAppTemplateUncheckedUpdateInput>;
};
export type WhatsAppTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
    where: Prisma.WhatsAppTemplateWhereUniqueInput;
};
export type WhatsAppTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppTemplateWhereInput;
    limit?: number;
};
export type WhatsAppTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WhatsAppTemplateSelect<ExtArgs> | null;
    omit?: Prisma.WhatsAppTemplateOmit<ExtArgs> | null;
};
