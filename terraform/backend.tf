terraform {
  backend "s3" {
    bucket = "mauro-deployments"
    key    = "personalwebsite"
    region = "ca-central-1"
  }
}
