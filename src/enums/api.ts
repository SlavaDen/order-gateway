enum ApiError {
  general,
  network,
  message,
}

enum REQUEST_STATUS {
  fulfilled = "fulfilled",
  pending = "pending",
  rejected = "rejected",
}

export {ApiError, REQUEST_STATUS}