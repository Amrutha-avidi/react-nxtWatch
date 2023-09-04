import React from 'react'

const SavedVideoContext = React.createContext({
  savedVideosList: [],
  isSaved: false,
  addToSavedVideos: () => {},
  deleteFromSavedVideos: () => {},
  updateSave: () => {},
})

export default SavedVideoContext
