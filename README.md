## Description

Style guide react components for fast development

## Installation

```bash
npm i --save styleguide-panfilov
```

## Using

Component Button

```bash
<Button>
    something text
</Button>
```

Props:

- type - indicates the type of button, optional props, defaults to string 'button';
- className - adding a class for a button, optional props, defaults to empty string. The component uses two default classes: button and primary(optional), they can be overridden;
- primary - flag for connecting the primary class, optional props, defaults to false;

Component CustomLink

```bash
<CustomLink>something link</CustoLink>
```

Props:

- to - indicates a link, required props;
- className - adding a class for a button, optional props, defaults to empty string. The component uses one default classes: link, it can be overridden;
- textCenter - set centered caption link text, optional props, defaults to true.

Component Text

```bash
<Text>something text</Text>
```

Props:

- tag - indicates a tag for component, optional props default to string 'span';
- className - adding a class for the component, required props, set the value to default class 'subtitle-h1' or 'subtitle-h2';

Component Typography

```bash
<Typography></Typography>
```

Props:

- tag - indicates a tag for component, optional props default to string 'span';
- className - adding a class for the component, required props, set the value to default class 'h1' or tag h1 or 'h2' or tag h2. The component uses one default classes: typography, it can be overridden;;
