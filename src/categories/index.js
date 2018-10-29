import React from "react";
import {
  Create,
  translate,
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextField,
  required,
  TextInput,
  FormTab,
  TabbedForm
} from "react-admin";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/icons/Bookmark";

import ThumbnailField from "../products/ThumbnailField";
import ProductRefField from "../products/ProductRefField";
import LinkToRelatedProducts from "./LinkToRelatedProducts";

export const CategoryIcon = Icon;

const listStyles = {
  name: { padding: "0 12px 0 25px" }
};

export const CategoryList = withStyles(listStyles)(({ classes, ...props }) => (
  <List {...props} sort={{ field: "name", order: "ASC" }}>
    <Datagrid>
      <TextField source="name" className={classes.name} />
      <LinkToRelatedProducts />
      <EditButton />
    </Datagrid>
  </List>
));

const createStyles = {
  stock: { width: "5em" },
  price: { width: "5em" },
  width: { width: "5em" },
  widthFormGroup: { display: "inline-block" },
  height: { width: "5em" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 }
};

export const CategoryCreate = withStyles(createStyles)(
  ({ classes, ...props }) => (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="New">
          <TextInput
            source="name"
            options={{ fullWidth: true }}
            validate={required()}
          />
        </FormTab>

        {/*
        <FormTab label="resources.products.tabs.details" path="details">
          <TextInput source="reference" validate={required()} />
          {/*
          <NumberInput
            source="price"
            validate={required()}
            className={classes.price}
          />
          
        <NumberInput
          source="width"
          validate={required()}
          className={classes.width}
          formClassName={classes.widthFormGroup}
        />
        <NumberInput
          source="height"
          validate={required()}
          className={classes.height}
          formClassName={classes.heightFormGroup}
        />
        <ReferenceInput source="category_id" reference="categories" allowEmpty>
          <SelectInput source="name" />
        </ReferenceInput>
        {/*
          <NumberInput
            source="stock"
            validate={required()}
            className={classes.stock}
          />
          
        </FormTab>
        <FormTab label="resources.products.tabs.description" path="description">
          <RichTextInput source="description" addLabel={false} />
        </FormTab>
        */}
      </TabbedForm>
    </Create>
  )
);

const CategoryTitle = translate(({ record, translate }) => (
  <span>
    {translate("resources.categories.name", { smart_count: 1 })} &quot;{
      record.name
    }&quot;
  </span>
));

export const CategoryEdit = props => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceManyField
        reference="products"
        target="category_id"
        label="resources.categories.fields.products"
        perPage={5}
      >
        <Datagrid>
          <ThumbnailField />
          <ProductRefField source="reference" />
          {/*
          <NumberField
            source="price"
            options={{ style: "currency", currency: "USD" }}
          />
          */}
          <NumberField source="width" options={{ minimumFractionDigits: 2 }} />
          <NumberField source="height" options={{ minimumFractionDigits: 2 }} />
          {/*
          <NumberField source="stock" />
          */}

          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);
