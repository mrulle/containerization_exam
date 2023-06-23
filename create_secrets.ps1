param (
    [Parameter(Mandatory = $true)]
    [string]$folderPath
)

# Angiv navnet på Docker-swarm-manageren, hvor hemmelighederne skal oprettes
$managerHost = "docker-desktop"
Write-Host "getting secrets from $folderPath"
# Angiv stien til mappen, der indeholder filerne
# $folderPath = "C:\Path\To\Folder"

# Få en liste over alle filer i mappen
$files = Get-ChildItem -Path $folderPath -File

Write-Host "files: $files"
# Opret Docker secrets baseret på filnavn og indhold
foreach ($file in $files) {
    $secretName = $file.Name
    $secretValue = Get-Content -Path $file.FullName -Raw
    
    #Slet eksisterende secret med samme navn
    docker secret rm $secretName


    # Opret den nye hemmelighed
    $secretValueBytes = [System.Text.Encoding]::UTF8.GetBytes($secretValue)
    $secretValueBase64 = [System.Convert]::ToBase64String($secretValueBytes)
    $secretValueBase64SecureString = ConvertTo-SecureString -String $secretValueBase64 -AsPlainText -Force
    $secretValueBase64Bytes = [System.Runtime.InteropServices.Marshal]::SecureStringToGlobalAllocUnicode($secretValueBase64SecureString)
    
    try {
        [System.IO.File]::WriteAllBytes("$env:TEMP\$secretName", [System.Text.Encoding]::Unicode.GetBytes([System.Runtime.InteropServices.Marshal]::PtrToStringUni($secretValueBase64Bytes)))
        # docker -H $managerHost secret create $secretName "$env:TEMP\$secretName.txt"
        docker secret create $secretName "$env:TEMP\$secretName"
        Write-Host "Secret $secretName created successfully"
    } finally {
        Remove-Item "$env:TEMP\$secretName" -Force
        [System.Runtime.InteropServices.Marshal]::ZeroFreeGlobalAllocUnicode($secretValueBase64Bytes)
    }
}
