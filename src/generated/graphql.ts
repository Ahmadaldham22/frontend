/* eslint-disable */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: any;
  DateTime: any;
  JSONString: any;
  _FieldSet: any;
};





export type TQuery = {
  __typename?: 'Query';
  allOrganizations?: Maybe<TOrganizationNodePage>;
  allProjects?: Maybe<TProjectNodePage>;
  project?: Maybe<TProjectNode>;
  clusterlevel?: Maybe<TClusterLevelNode>;
};


export type TQueryAllOrganizationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type TQueryAllProjectsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type TQueryProjectArgs = {
  id?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
};


export type TQueryClusterlevelArgs = {
  id?: Maybe<Scalars['UUID']>;
};

export type TOrganizationNodePage = {
  __typename?: 'OrganizationNodePage';
  totalCount?: Maybe<Scalars['Int']>;
  resultCount?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<TOrganizationNode>>>;
};

export type TOrganizationNode = {
  __typename?: 'OrganizationNode';
  id: Scalars['UUID'];
  created: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};



export type TProjectNodePage = {
  __typename?: 'ProjectNodePage';
  totalCount?: Maybe<Scalars['Int']>;
  resultCount?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<TProjectNode>>>;
};

export type TProjectNode = {
  __typename?: 'ProjectNode';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  keycloakData: Scalars['JSONString'];
  id: Scalars['UUID'];
  specRepository: Scalars['String'];
  specRepositoryBranch?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  specType: TProjectSpecType;
  currentCommit: Scalars['String'];
  currentCommitDateTime?: Maybe<Scalars['DateTime']>;
  repositoryStatus: TProjectRepositoryStatus;
  accessUsername: Scalars['String'];
  accessToken?: Maybe<Scalars['String']>;
  organization?: Maybe<TOrganizationNode>;
  packages: Array<TPackageNode>;
  sops?: Maybe<Array<Maybe<TSopsProviderNode>>>;
};


export enum TProjectSpecType {
  Plain = 'PLAIN',
  Helm = 'HELM'
}

export enum TProjectRepositoryStatus {
  Unknown = 'UNKNOWN',
  CloningPending = 'CLONING_PENDING',
  Cloning = 'CLONING',
  CloningFailed = 'CLONING_FAILED',
  CloningSuccessful = 'CLONING_SUCCESSFUL',
  BranchUnavailable = 'BRANCH_UNAVAILABLE',
  AuthFailed = 'AUTH_FAILED',
  ParsingFailed = 'PARSING_FAILED',
  Ok = 'OK'
}

export type TPackageNode = {
  __typename?: 'PackageNode';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  project: TProjectNode;
  dirPath: Scalars['String'];
  type: Scalars['String'];
  namespace: Scalars['String'];
  fileInformation?: Maybe<Array<Maybe<TFileInformationNode>>>;
  hash: Scalars['String'];
  environments: Array<TClusterLevelNode>;
  deployments?: Maybe<Array<Maybe<TDeploymentNode>>>;
  clusterLevel?: Maybe<Array<Maybe<TClusterLevelNode>>>;
};


export type TPackageNodeDeploymentsArgs = {
  level?: Maybe<Scalars['String']>;
  switchable?: Maybe<Scalars['Boolean']>;
};


export type TPackageNodeClusterLevelArgs = {
  level?: Maybe<Scalars['String']>;
};

export type TFileInformationNode = {
  __typename?: 'FileInformationNode';
  path?: Maybe<Scalars['String']>;
  encrypted?: Maybe<Scalars['Boolean']>;
};

export type TClusterLevelNode = {
  __typename?: 'ClusterLevelNode';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  package: TPackageNode;
  type: TClusterLevelType;
  valuesPath: Scalars['String'];
  valuesType?: Maybe<TClusterLevelValuesType>;
  sopsCredentials?: Maybe<TSopsProviderNode>;
  deployments: Array<TDeploymentNode>;
  specsUrl?: Maybe<Scalars['String']>;
};

export enum TClusterLevelType {
  Local = 'LOCAL',
  Remote = 'REMOTE'
}

export enum TClusterLevelValuesType {
  File = 'FILE',
  Dir = 'DIR'
}

export type TSopsProviderNode = TAwskmsNode | TPgpKeyNode;

export type TAwskmsNode = {
  __typename?: 'AWSKMSNode';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  project: TProjectNode;
  accessKey: Scalars['String'];
  secretAccessKey: Scalars['String'];
};

export type TPgpKeyNode = {
  __typename?: 'PGPKeyNode';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type TDeploymentNode = {
  __typename?: 'DeploymentNode';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  ports: Scalars['String'];
  clusterLevel: TClusterLevelNode;
  isSwitchable: Scalars['Boolean'];
};

export type TMutation = {
  __typename?: 'Mutation';
  createUpdateOrganization?: Maybe<TCreateUpdateOrganizationPayload>;
  createUpdateProject?: Maybe<TCreateUpdateProjectPayload>;
  deleteProject?: Maybe<TDeleteProject>;
  createUpdateClusterLevel?: Maybe<TCreateUpdateClusterLevelPayload>;
  deleteClusterLevel?: Maybe<TDeleteClusterLevel>;
  createUpdateSops?: Maybe<TCreateUpdateSops>;
  deleteSops?: Maybe<TDeleteSops>;
};


export type TMutationCreateUpdateOrganizationArgs = {
  input: TCreateUpdateOrganizationInput;
};


export type TMutationCreateUpdateProjectArgs = {
  input: TCreateUpdateProjectInput;
};


export type TMutationDeleteProjectArgs = {
  id?: Maybe<Scalars['UUID']>;
};


export type TMutationCreateUpdateClusterLevelArgs = {
  input: TCreateUpdateClusterLevelInput;
};


export type TMutationDeleteClusterLevelArgs = {
  id?: Maybe<Scalars['UUID']>;
};


export type TMutationCreateUpdateSopsArgs = {
  sopsData: TSopsInputType;
};


export type TMutationDeleteSopsArgs = {
  id?: Maybe<Scalars['UUID']>;
};

export type TCreateUpdateOrganizationInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  onTrial?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TCreateUpdateOrganizationPayload = {
  __typename?: 'CreateUpdateOrganizationPayload';
  organization?: Maybe<TOrganizationNode>;
  errors?: Maybe<Array<Maybe<TErrorType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

export type TCreateUpdateProjectInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  specRepository: Scalars['String'];
  specRepositoryBranch?: Maybe<Scalars['String']>;
  specType: Scalars['String'];
  currentCommit?: Maybe<Scalars['String']>;
  currentCommitDateTime?: Maybe<Scalars['DateTime']>;
  accessUsername?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  organization: Scalars['UUID'];
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TCreateUpdateProjectPayload = {
  __typename?: 'CreateUpdateProjectPayload';
  project?: Maybe<TProjectNode>;
  errors?: Maybe<Array<Maybe<TErrorType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TDeleteProject = {
  __typename?: 'DeleteProject';
  ok?: Maybe<Scalars['Boolean']>;
};

export type TCreateUpdateClusterLevelInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  package: Scalars['ID'];
  sopsCredentials?: Maybe<Scalars['ID']>;
  valuesPath?: Maybe<Scalars['String']>;
  valuesType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TCreateUpdateClusterLevelPayload = {
  __typename?: 'CreateUpdateClusterLevelPayload';
  clusterLevel?: Maybe<TClusterLevelNode>;
  errors?: Maybe<Array<Maybe<TErrorType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TDeleteClusterLevel = {
  __typename?: 'DeleteClusterLevel';
  ok?: Maybe<Scalars['Boolean']>;
};

export type TSopsInputType = {
  id?: Maybe<Scalars['UUID']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sopsType: TSopsTypeEnum;
  project: Scalars['UUID'];
  secret1: Scalars['String'];
  secret2?: Maybe<Scalars['String']>;
  secret3?: Maybe<Scalars['String']>;
};

export enum TSopsTypeEnum {
  Aws = 'aws',
  Pgp = 'pgp'
}

export type TCreateUpdateSops = {
  __typename?: 'CreateUpdateSOPS';
  ok?: Maybe<Scalars['Boolean']>;
};

export type TDeleteSops = {
  __typename?: 'DeleteSOPS';
  ok?: Maybe<Scalars['Boolean']>;
};


export type TOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type TOrganizationsQueryResult = { __typename?: 'Query', allOrganizations?: Maybe<{ __typename?: 'OrganizationNodePage', results?: Maybe<Array<Maybe<{ __typename?: 'OrganizationNode', id: any, title: string, description?: Maybe<string> }>>> }> };

export type TCreateOrganizationMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type TCreateOrganizationMutationResult = { __typename?: 'Mutation', createUpdateOrganization?: Maybe<{ __typename?: 'CreateUpdateOrganizationPayload', organization?: Maybe<{ __typename?: 'OrganizationNode', title: string, description?: Maybe<string> }>, errors?: Maybe<Array<Maybe<{ __typename?: 'ErrorType', field: string, messages: Array<string> }>>> }> };

export type TProjectsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type TProjectsQueryResult = { __typename?: 'Query', allProjects?: Maybe<{ __typename?: 'ProjectNodePage', totalCount?: Maybe<number>, results?: Maybe<Array<Maybe<{ __typename?: 'ProjectNode', title: string, description?: Maybe<string>, currentCommit: string, id: any, packages: Array<{ __typename?: 'PackageNode', title: string }>, sops?: Maybe<Array<Maybe<{ __typename?: 'AWSKMSNode', title: string } | { __typename?: 'PGPKeyNode', title: string }>>> }>>> }> };

export type TProjectDetailQueryVariables = Exact<{
  id?: Maybe<Scalars['UUID']>;
}>;


export type TProjectDetailQueryResult = { __typename?: 'Query', project?: Maybe<{ __typename?: 'ProjectNode', created: any, title: string, description?: Maybe<string>, id: any, specRepository: string, specRepositoryBranch?: Maybe<string>, specType: TProjectSpecType, currentCommit: string, accessUsername: string, accessToken?: Maybe<string>, packages: Array<{ __typename?: 'PackageNode', title: string, description?: Maybe<string>, type: string, namespace: string, id: any, environments: Array<{ __typename?: 'ClusterLevelNode', deployments: Array<{ __typename?: 'DeploymentNode', title: string, id: any }> }> }>, sops?: Maybe<Array<Maybe<{ __typename?: 'AWSKMSNode', title: string, description?: Maybe<string> } | { __typename?: 'PGPKeyNode', title: string, description?: Maybe<string> }>>> }> };

export type TProjectDetailOtherProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type TProjectDetailOtherProjectsQueryResult = { __typename?: 'Query', allProjects?: Maybe<{ __typename?: 'ProjectNodePage', results?: Maybe<Array<Maybe<{ __typename?: 'ProjectNode', title: string, id: any, packages: Array<{ __typename?: 'PackageNode', title: string }> }>>> }> };

export type TCreateProjectMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  specRepository: Scalars['String'];
  specType: Scalars['String'];
  accessUsername: Scalars['String'];
  accessToken: Scalars['String'];
  specRepositoryBranch: Scalars['String'];
  organization: Scalars['UUID'];
}>;


export type TCreateProjectMutationResult = { __typename?: 'Mutation', createUpdateProject?: Maybe<{ __typename?: 'CreateUpdateProjectPayload', project?: Maybe<{ __typename?: 'ProjectNode', title: string }>, errors?: Maybe<Array<Maybe<{ __typename?: 'ErrorType', messages: Array<string>, field: string }>>> }> };

export type TUpdateProjectMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  specRepository: Scalars['String'];
  specType: Scalars['String'];
  accessUsername: Scalars['String'];
  accessToken: Scalars['String'];
  specRepositoryBranch: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  organization: Scalars['UUID'];
}>;


export type TUpdateProjectMutationResult = { __typename?: 'Mutation', createUpdateProject?: Maybe<{ __typename?: 'CreateUpdateProjectPayload', project?: Maybe<{ __typename?: 'ProjectNode', title: string }>, errors?: Maybe<Array<Maybe<{ __typename?: 'ErrorType', messages: Array<string>, field: string }>>> }> };

export type TDeleteProjectMutationVariables = Exact<{
  id?: Maybe<Scalars['UUID']>;
}>;


export type TDeleteProjectMutationResult = { __typename?: 'Mutation', deleteProject?: Maybe<{ __typename?: 'DeleteProject', ok?: Maybe<boolean> }> };

export type TCreateUpdateSopsMutationVariables = Exact<{
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  sopsType: TSopsTypeEnum;
  project: Scalars['UUID'];
  secret1: Scalars['String'];
  secret2?: Maybe<Scalars['String']>;
  secret3?: Maybe<Scalars['String']>;
}>;


export type TCreateUpdateSopsMutationResult = { __typename?: 'Mutation', createUpdateSops?: Maybe<{ __typename?: 'CreateUpdateSOPS', ok?: Maybe<boolean> }> };


export const OrganizationsQuery = gql`
    query OrganizationsQuery {
  allOrganizations {
    results {
      id
      title
      description
    }
  }
}
    `;
export const CreateOrganizationMutation = gql`
    mutation CreateOrganizationMutation($title: String!) {
  createUpdateOrganization(input: {title: $title}) {
    organization {
      title
      description
    }
    errors {
      field
      messages
    }
  }
}
    `;
export const ProjectsQuery = gql`
    query ProjectsQuery {
  allProjects {
    totalCount
    results {
      title
      description
      currentCommit
      id
      packages {
        title
      }
      sops {
        ... on AWSKMSNode {
          title
        }
        ... on PGPKeyNode {
          title
        }
      }
    }
  }
}
    `;
export const ProjectDetailQuery = gql`
    query ProjectDetailQuery($id: UUID) {
  project(id: $id) {
    created
    title
    description
    id
    specRepository
    specRepositoryBranch
    specType
    currentCommit
    accessUsername
    accessToken
    packages {
      title
      description
      type
      namespace
      id
      environments {
        deployments {
          title
          id
        }
      }
    }
    sops {
      ... on AWSKMSNode {
        title
        description
      }
      ... on PGPKeyNode {
        title
        description
      }
    }
  }
}
    `;
export const ProjectDetailOtherProjectsQuery = gql`
    query ProjectDetailOtherProjectsQuery {
  allProjects {
    results {
      title
      id
      packages {
        title
      }
    }
  }
}
    `;
export const CreateProject = gql`
    mutation CreateProject($title: String!, $description: String!, $specRepository: String!, $specType: String!, $accessUsername: String!, $accessToken: String!, $specRepositoryBranch: String!, $organization: UUID!) {
  createUpdateProject(input: {title: $title, description: $description, specRepository: $specRepository, specType: $specType, specRepositoryBranch: $specRepositoryBranch, accessUsername: $accessUsername, accessToken: $accessToken, organization: $organization}) {
    project {
      title
    }
    errors {
      messages
      field
    }
  }
}
    `;
export const UpdateProject = gql`
    mutation UpdateProject($title: String!, $description: String!, $specRepository: String!, $specType: String!, $accessUsername: String!, $accessToken: String!, $specRepositoryBranch: String!, $id: ID, $organization: UUID!) {
  createUpdateProject(input: {title: $title, description: $description, specRepository: $specRepository, specType: $specType, specRepositoryBranch: $specRepositoryBranch, accessUsername: $accessUsername, accessToken: $accessToken, organization: $organization, id: $id}) {
    project {
      title
    }
    errors {
      messages
      field
    }
  }
}
    `;
export const DeleteProject = gql`
    mutation DeleteProject($id: UUID) {
  deleteProject(id: $id) {
    ok
  }
}
    `;
export const CreateUpdateSops = gql`
    mutation createUpdateSops($title: String!, $description: String, $sopsType: SOPSTypeEnum!, $project: UUID!, $secret1: String!, $secret2: String, $secret3: String) {
  createUpdateSops(sopsData: {title: $title, description: $description, sopsType: $sopsType, project: $project, secret1: $secret1, secret2: $secret2, secret3: $secret3}) {
    ok
  }
}
    `;