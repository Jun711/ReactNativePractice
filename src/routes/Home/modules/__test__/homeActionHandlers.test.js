import * as actionHandlers from '../homeActionHandlers'
import { initialState } from '../home'
import constants from '../actionConstants'

describe(`handle ${constants.TOGGLE_SEARCH_BAR} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleToggleSearchBar(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_SEARCH_BAR} action`, () => {
    expect(actionHandlers.handleToggleSearchBar(initialState, {
      type: constants.TOGGLE_SEARCH_BAR,
      payload: {}
    })).toEqual({
      ...initialState,
      displaySearchBar: !initialState.displaySearchBar,
      locationPredictions: []
    })

    expect(actionHandlers.handleToggleSearchBar(initialState, {
      type: constants.TOGGLE_SEARCH_BAR,
      payload: {}
    })).toMatchSnapshot()
  })
})

describe(`handle ${constants.ON_MAP_PRESSED} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleMapPressed(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.ON_MAP_PRESSED} action`, () => {
    expect(actionHandlers.handleMapPressed(initialState, {type: constants.ON_MAP_PRESSED, payload: {}})).toEqual({
      ...initialState,
      displaySearchBar: false,
      displayCentreMarker: initialState.displayCentreMarker,
      calloutPressed: false
    })

    expect(actionHandlers.handleMapPressed(initialState, {
      type: constants.ON_MAP_PRESSED,
      payload: {}
    })).toMatchSnapshot()
  })
})

describe(`handle ${constants.TOGGLE_CENTRE_MARKER} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleToggleCentreMarker(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_CENTRE_MARKER} action without payload`, () => {
    expect(actionHandlers.handleToggleCentreMarker(initialState, {
      type: constants.TOGGLE_CENTRE_MARKER,
    })).toEqual({
      ...initialState,
      displayCentreMarker: !initialState.displayCentreMarker,
    })
  })

  it(`snapshot - handles ${constants.TOGGLE_CENTRE_MARKER} action without payload`, () => {
    expect(actionHandlers.handleToggleCentreMarker(initialState, {
      type: constants.TOGGLE_CENTRE_MARKER,
    })).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_CENTRE_MARKER} action with payload`, () => {
    const payload = {value: false}

    expect(actionHandlers.handleToggleCentreMarker(initialState, {
      type: constants.TOGGLE_CENTRE_MARKER,
      payload
    })).toEqual({
      ...initialState,
      displayCentreMarker: payload.value
    })
  })

  it(`snapshot - handles ${constants.TOGGLE_CENTRE_MARKER} action with payload`, () => {
    expect(actionHandlers.handleToggleCentreMarker(initialState, {
      type: constants.TOGGLE_CENTRE_MARKER,
      payload: {value: false}
    })).toMatchSnapshot()
  })
})

describe(`handle ${constants.TOGGLE_LOADER} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleToggleLoader(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_LOADER} action without payload`, () => {
    expect(actionHandlers.handleToggleLoader(initialState, {type: constants.TOGGLE_LOADER})).toEqual({
      ...initialState,
      displayLoader: !initialState.displayLoader,
    })
  })

  it(`snapshot handles ${constants.TOGGLE_LOADER} action without payload`, () => {
    expect(actionHandlers.handleToggleLoader(initialState, {
      type: constants.TOGGLE_LOADER,
    })).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_LOADER} action with payload`, () => {
    const payload = {value: true}

    expect(actionHandlers.handleToggleLoader(initialState, {
      type: constants.TOGGLE_LOADER,
      payload
    })).toEqual({
      ...initialState,
      displayLoader: payload.value
    })
  })

  it(`snapshot - handles ${constants.TOGGLE_LOADER} action with payload`, () => {
    expect(actionHandlers.handleToggleLoader(initialState, {
      type: constants.TOGGLE_LOADER,
      payload: {value: false}
    })).toMatchSnapshot()
  })
})

describe(`handle ${constants.TOGGLE_CALLOUT} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleToggleCallout(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_CALLOUT} action without payload`, () => {
    expect(actionHandlers.handleToggleCallout(initialState, {type: constants.TOGGLE_CALLOUT})).toEqual({
      ...initialState,
      calloutPressed: !initialState.calloutPressed,
    })
  })

  it(`snapshot handles ${constants.TOGGLE_CALLOUT} action without payload`, () => {
    expect(actionHandlers.handleToggleCallout(initialState, {
      type: constants.TOGGLE_CALLOUT,
    })).toMatchSnapshot()
  })

  it(`handles ${constants.TOGGLE_CALLOUT} action with payload`, () => {
    const payload = {value: true}

    expect(actionHandlers.handleToggleCallout(initialState, {
      type: constants.TOGGLE_CALLOUT,
      payload
    })).toEqual({
      ...initialState,
      calloutPressed: payload.value
    })
  })

  it(`snapshot - handles ${constants.TOGGLE_CALLOUT} action with payload`, () => {
    expect(actionHandlers.handleToggleCallout(initialState, {
      type: constants.TOGGLE_CALLOUT,
      payload: {value: false}
    })).toMatchSnapshot()
  })
})

describe(`handle ${constants.UPDATE_LAST_SEARCH} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleUpdateLastSearch(initialState, {type: undefined})).toMatchSnapshot()
  })

  const payload = {latitude: 111, longitude: -50}

  it(`handles ${constants.UPDATE_LAST_SEARCH} action`, () => {
    expect(actionHandlers.handleUpdateLastSearch(initialState, {type: constants.UPDATE_LAST_SEARCH, payload: payload})).toEqual({
      ...initialState,
      lastSearchCoordinates: {
        latitude: payload.latitude,
        longitude: payload.longitude
      }
    })

    expect(actionHandlers.handleUpdateLastSearch(initialState, {
      type: constants.UPDATE_LAST_SEARCH,
      payload
    })).toMatchSnapshot()
  })
})