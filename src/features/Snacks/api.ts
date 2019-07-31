import { ApiDefinitionType } from '../../common/network';
import { httpMethods } from '../../common/httpMethods';
import { GetSnacksAction } from './Stock/actions';
import { PostVoteAction } from './Voting/actions';

// TODO: Does this need updating, can this be hardcoded, should I stick this in env again?
// const PLATFORM_BASE_URL = `${process.env.REACT_APP_PLATFORM_API_BASE_URL}`;
const SNACKS_BASE_URL = `${process.env.REACT_APP_SNACKS_API_BASE_URL}`;

export const API_SNACKS = {
    snacks: () => `${SNACKS_BASE_URL}/snacks`,
    vote: () => `${API_SNACKS.snacks()}/vote/`
};

export const getSnacksDefinition = (action: GetSnacksAction): ApiDefinitionType => ({
    basePath: API_SNACKS.snacks(),
    path: '',
    method: httpMethods.GET
});

export const postVoteDefinition = (action: PostVoteAction): ApiDefinitionType => ({
    basePath: API_SNACKS.vote(),
    path: action.id,
    method: httpMethods.POST
});
