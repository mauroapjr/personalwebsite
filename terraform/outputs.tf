output "s3_bucket" {
  value = aws_s3_bucket.b.id
}


output "cloudfront_distribution" {
  value = aws_cloudfront_distribution.s3_distribution.id
}
