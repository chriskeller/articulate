import {
  ADD_SLOT,
  ADD_TEXT_PROMPT,
  CHANGE_INTENT_DATA,
  CHANGE_WEBHOOK_DATA,
  CHANGE_SLOT_NAME,
  DELETE_TEXT_PROMPT,
  LOAD_INTENT,
  LOAD_INTENT_ERROR,
  LOAD_INTENT_SUCCESS,
  LOAD_SCENARIO,
  LOAD_SCENARIO_ERROR,
  LOAD_SCENARIO_SUCCESS,
  REMOVE_AGENT_RESPONSE,
  REMOVE_SLOT,
  REMOVE_USER_SAYING,
  RESET_INTENT_DATA,
  SET_WINDOW_SELECTION,
  TAG_ENTITY,
  TOGGLE_FLAG,
  UNTAG_ENTITY,
  LOAD_WEBHOOK_ERROR,
  LOAD_WEBHOOK_SUCCESS,
  LOAD_WEBHOOK,
} from './constants';

export function changeIntentData(payload) {
  return {
    type: CHANGE_INTENT_DATA,
    payload,
  };
}

export function changeWebhookData(payload) {
  return {
    type: CHANGE_WEBHOOK_DATA,
    payload,
  };
}

export function resetIntentData() {
  return {
    type: RESET_INTENT_DATA,
  };
}

export function untagEntity(example) {
  return {
    type: UNTAG_ENTITY,
    example,
  };
}

export function tagEntity(payload) {
  return {
    type: TAG_ENTITY,
    payload,
  };
}

export function toggleFlag(payload) {
  return {
    type: TOGGLE_FLAG,
    payload,
  };
}

export function changeSlotName(payload) {
  return {
    type: CHANGE_SLOT_NAME,
    payload,
  };
}

export function addTextPrompt(payload) {
  return {
    type: ADD_TEXT_PROMPT,
    payload,
  };
}

export function deleteTextPrompt(payload) {
  return {
    type: DELETE_TEXT_PROMPT,
    payload,
  };
}

export function removeUserSaying(index) {
  return {
    type: REMOVE_USER_SAYING,
    index,
  };
}

export function removeAgentResponse(index) {
  return {
    type: REMOVE_AGENT_RESPONSE,
    index,
  };
}

export function removeSlot(index) {
  return {
    type: REMOVE_SLOT,
    index,
  };
}

export function addSlot(slot) {
  return {
    type: ADD_SLOT,
    slot,
  };
}

export function setWindowSelection(selection) {
  return {
    type: SET_WINDOW_SELECTION,
    selection,
  };
}

export function loadIntentError(error) {
  return {
    type: LOAD_INTENT_ERROR,
    error,
  };
}

export function loadIntentSuccess(intent) {
  return {
    type: LOAD_INTENT_SUCCESS,
    intent,
  };
}

export function loadIntent(id) {
  return {
    type: LOAD_INTENT,
    apiCall: true,
    id,
  };
}

export function loadScenarioError(error) {
  return {
    type: LOAD_SCENARIO_ERROR,
    error,
  };
}

export function loadScenarioSuccess(scenario) {
  return {
    type: LOAD_SCENARIO_SUCCESS,
    scenario,
  };
}

export function loadScenario(id) {
  return {
    type: LOAD_SCENARIO,
    apiCall: true,
    id,
  };
}

export function loadWebhookError(error) {
  return {
    type: LOAD_WEBHOOK_ERROR,
    error,
  };
}

export function loadWebhookSuccess(webhook) {
  return {
    type: LOAD_WEBHOOK_SUCCESS,
    webhook,
  };
}

export function loadWebhook(id) {
  return {
    type: LOAD_WEBHOOK,
    apiCall: true,
    id,
  };
}
