# These settings are for the sandbox and should mainly be overriden by TF_VARS
# or set with environment variables TF_VAR_xxxx

variable "api_url" {
  default = "https://api.london.cloud.service.gov.uk"
}

variable "AZURE_CREDENTIALS" {}
variable "azure_key_vault" {}
variable "azure_resource_group" {}

variable "application_stopped" {
  default = false
}

variable "timeout" {
  default = 180
}

variable "paas_space" {
  default = "sandbox"
}

variable "paas_org_name" {
  default = "dfe"
}

variable "instances" {
  default = 1
}

variable "paas_internet_hostnames" {
  default = []
}

variable "paas_app_route_name" {
  default = []
}

variable "paas_application_name" {
  default = "dfe-get-schoolexperience-prototype"
}

variable "paas_app_docker_image" {
  default = "ghcr.io/dfe-digital/get-schoolexperience-prototype:master"
}

variable "strategy" {
  default = "blue-green"
}
