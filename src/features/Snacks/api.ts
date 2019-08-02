import { ApiDefinitionType } from '../../common/network';
import { httpMethods } from '../../common/httpMethods';
import { GetSnacksAction } from './Stock/actions';
import { PostVoteAction } from './Voting/actions';

// TODO: Place url in env vars
const SNACKS_BASE_URL = 'http://localhost:3000';

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
