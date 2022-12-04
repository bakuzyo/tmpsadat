// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose then
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import exp from "./exp";
import pageInfo from './pageInfo';
import competence from './competence';
import social from './social';
import diplome from "./diplome";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    exp,
    competence,
    social,
    diplome,
  ]),
});
