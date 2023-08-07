// 2023-07-11 08:35
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (url.includes("/v1/vip_info")) {
  if (obj.vip) {
    obj.vip.expires_time = "8000000000";
  }
  if (obj.svip) {
    obj.svip.expires_time = "8000000000";
  }
} else if (url.includes("/v2/user")) {
  if (obj.result) {
    obj.result.svip_given = 999;
    obj.result.is_phone_verified = true;
    obj.result.is_xy_vip = true;
    obj.result.vip_expired_at = 8000000000;
    obj.result.is_vip = true;
    obj.result.xy_svip_expire = 8000000000;
    if (obj.result.wt) {
      if (obj.result.wt.vip) {
        obj.result.wt.vip.enabled = true;
        obj.result.wt.vip.expired_at = 8000000000;
        obj.result.wt.vip.svip_expired_at = 8000000000;
      }
      obj.result.wt.svip_given = 999;
    }
    obj.result.is_primary = true;
    obj.result.xy_vip_expire = 8000000000;
    obj.result.svip_expired_at = 8000000000;
    obj.result.vip_type = "s";
  }
}
$done({ body: JSON.stringify(obj) });
